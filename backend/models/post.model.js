const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
	likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
	/**
	 * To prevent like-unlike exploits
	 */
	maxLikes: { type: Number, default: 0 },
	/**
	 * The number of likes the last time this user received a reward
	 */
	numberOfLikesWhenLastRewardSent: { type: Number, default: 0 },
	content: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
