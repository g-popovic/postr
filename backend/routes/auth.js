const express = require('express');
const User = require('../models/user.model');
const { web3, generateNonce } = require('../util/web3.config');
const router = express.Router();

router.get('/test', (req, res) => {
	res.sendStatus(200);
});

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
			nonce: newNonce,
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

router.get('/status', (req, res) => {
	res.json(req.session.user);
});

router.get('/generate-nonce/:address', async (req, res) => {
	const { address } = req.params;

	try {
		const nonce = generateNonce();

		const existingUser = await User.findOne({
			address,
		});

		if (existingUser) {
			existingUser.nonce = nonce;
			existingUser.save();
		} else {
			req.session.nonce = nonce;
		}

		res.json({ nonce });
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
});

router.post('/verify-signature-and-login', async (req, res) => {
	const { signature, address } = req.body;

	try {
		// Data validation
		if (!signature || !address) {
			return res.sendStatus(400);
		}

		const existingUser = await User.findOne({
			address,
		});

		// We need the user to sign a specific string. If there's an account with this address, we can
		// save the nonce there. Otherwise, we use req.session.nonce. Make sure at least one exists
		if (!existingUser && !req.session.nonce) {
			return res.sendStatus(400);
		}

		// Get the string the user is supposed to sign
		const nonce = existingUser ? existingUser.nonce : req.session.nonce;

		// Recover the address of the user who signed this message
		const addressWhichSignedMessage = web3.eth.accounts.recover(nonce, signature);

		if (address === addressWhichSignedMessage.toLowerCase()) {
			await signInUser(req, existingUser, address);

			res.sendStatus(200);
		} else {
			res.status(401).send('Invalid signature');
		}
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
});

router.post('/sample-signature-verification', async (req, res) => {
	const nonce = 'Hello world';

	const signingAddress = web3.eth.accounts.recover(nonce, req.body.signature);

	console.log({ signingAddress });
	res.send(signingAddress);
});

module.exports = router;
