const express = require('express');
const User = require('../models/user.model');
const { web3, generateNonce } = require('../util/web3.config');
const router = express.Router();

async function signInUser(req, existingUser, address) {
	// We need to generate a new nonce which will need to be signed next time the user logs in
	// Otherwise if the signed string gets stolen an attacker can gain unauthorized access
	const newNonce = generateNonce();

	if (existingUser) {
		existingUser.nonce = newNonce;
		existingUser.save();
		req.session.user = {
			id: existingUser.id,
			address: existingUser.address,
		};
	} else {
		const newUser = new User({
			address,
			name: generateRandomUsername(),
		});
		await newUser.save();
		req.session.user = {
			id: newUser.id,
			address: newUser.address,
		};
	}
}

function generateRandomUsername() {
	return 'User #' + Math.floor(Math.random() * 1000);
}

router.get('/generate-nonce', async (req, res) => {
	const { address } = req.body;

	res.json({ nonce });
});

router.post('/verify-signature', async (req, res) => {
	const { signature, address } = req.body;

	// Data validation
	if (!signature || !address) {
		res.sendStatus(400);
	}

	const existingUser = User.findOne({
		address,
	});

	// We need the user to sign a specific string. If there's an account with this address, we can
	// save the nonce there. Otherwise, we use req.session.nonce. Make sure at least one exists
	if (!existingUser && !req.session.nonce) {
		res.status();
	}

	// Get the string the user is supposed to sign
	const nonce = existingUser ? existingUser.nonce : req.session.nonce;

	// Recover the address of the user who signed this message
	const addressWhichSignedMessage = web3.eth.accounts.recover(nonce, signature);

	if (address === addressWhichSignedMessage) {
		await signInUser(req, existingUser, address);

		res.sendStatus(200);
	} else {
		res.sendStatus(401);
	}
});

router.get('/sample-signature-verification', async (req, res) => {
	const nonce = 'Hello world';
	const signingAddress = web3.eth.accounts.recover(nonce, signature);
	console.log(signingAddress);
	res.send(signingAddress);
});

module.exports = router;
