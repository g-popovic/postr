const Post = require('../models/post.model');
const express = require('express');
const router = express.Router();
const { triggerSendingRewards } = require('../util/web3');
const { authUser } = require('../middleware/auth');

const MIN_NUMBER_OF_LIKES_FOR_REWARD = 0;
const REWARD_PER_LIKE_IN_WEI = 100000000000; // 1 ether per 100,000 likes

router.post('/new', authUser, async (req, res) => {
	try {
		const newPost = new Post({
			userId: req.user.id,
			content: req.body.text,
		});
		await newPost.save();
		res.sendStatus(200);
	} catch (err) {
		res.sendStatus(500);
		console.error(err);
	}
});

router.get('/all', async (req, res) => {
	const posts = await Post.find().populate('userId').sort({ created_at: -1 });
	res.json({ posts });
});

router.post('/toggle-like/:postId', authUser, async (req, res) => {
	const userId = req.user.id;
	const { postId } = req.params;

	const post = await Post.findById(postId).populate('userId');
	if (!post) {
		return res.sendStatus(404);
	}

	try {
		// Check if user has already like post
		if (post.likes.includes(userId)) {
			// Unlike post
			post.likes = post.likes.filter(likeUseId => likeUseId.toString() !== userId);
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
				triggerSendingRewards(post.userId.wallet, post.likes.length, REWARD_PER_LIKE_IN_WEI)
					.then(() => {
						console.log('Triggered reward withdrawl');
					})
					.catch(err => {
						console.error('Error triggering reward withdrawl', err);
					});
			}

			// save post
			await post.save();
		}
		res.sendStatus(200);
	} catch (err) {
		console.error('Error liking post', err);
		res.sendStatus(500);
	}
});

module.exports = router;
