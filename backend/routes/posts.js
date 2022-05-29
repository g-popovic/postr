const Post = require('../models/Post');
const express = require('express');
const router = express.Router();

const MIN_NUMBER_OF_LIKES_FOR_REWARD = 100;
const REWARD_PER_LIKE_IN_WEI = 100000000000; // 1 ether per 100,000 likes

router.post('/toggle-like/:postId', async (req, res) => {
	// TODO: Use middleware and proper authentication
	const userId = 'xxx';
	const { postId } = req.params;

	const post = await Post.findById(postId);
	if (!post) {
		return res.sendStatus(404);
	}

	try {
		// Check if user has already like post
		if (post.likes.includes(userId)) {
			// Unlike post
			post.likes = post.likes.filter(likeUseId => likeUseId !== userId);
			await post.save();
		} else {
			// Like post
			post.likes = [...post.likes, userId];
			// Update maxLikes if necessary
			if (post.likes.length > post.maxLikes) {
				post.maxLikes = post.likes.length;
			}
			// Trigger reward if there are enough likes since last reward was sent
			if (
				post.likes.length - post.numberOfLikesWhenLastRewardSent >
				MIN_NUMBER_OF_LIKES_FOR_REWARD
			) {
				// TODO: Fetch user data in addition to post data in order to get wallet address
				triggerSendingRewards(post.wallet, post.likes.length, REWARD_PER_LIKE_IN_WEI)
					.then(() => {
						console.log('Triggered reward withdrawl');
					})
					.catch(err => {
						console.error('Error triggering reward withdrawl', err);
					});
			}
		}
		res.sendStatus(200);
	} catch (err) {
		console.error('Error liking post', err);
		res.sendStatus(500);
	}
});

module.exports = router;
