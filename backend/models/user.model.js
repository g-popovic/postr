const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	address: { type: String, required: true, index: 'text' },
	nonce: { type: String, required: true },
	name: { type: String, required: true },
	bio: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
