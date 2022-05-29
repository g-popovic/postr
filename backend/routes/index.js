const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello everyone');
});

router.get('/posts', async (req, res) => {
	// const user = await User.find({ wallet: 1 });
	res.send(user);
});

module.exports = router;
