const express = require('express');
const { randomBytes } = require('crypto');
const User = require('../models/user.model');
const router = express.Router();

router.get('/verify-signature', async (req, res) => {
	const { signature } = req.body;
	const signingAddress = web3.eth.accounts.recover('Hello world', signature);
	console.log({ signingAddress, signature });
});
module.exports = router;
