import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../provider/UserContext';
import { axiosApp } from '../../util/config';

export function Post({ post }) {
	const [userData] = useContext(UserContext);
	const [isLiked, setIsLiked] = useState(post && post.likes && post.likes.includes(userData.id));
	const likeIsInDB = post && post.likes && post.likes.includes(userData.id);

	if (!post) {
		return null;
	}

	function onClickLike() {
		if (userData.id) {
			setIsLiked(prev => !prev);
			updateLikeInDb();
		} else {
			alert('You need to login to like posts');
		}
	}

	async function updateLikeInDb() {
		try {
			await axiosApp.post('/posts/toggle-like/' + post._id);
		} catch (err) {
			alert('Error');
			console.error(err);
		}
	}

	const numberOfLikes =
		post.likes.length + (isLiked && !likeIsInDB ? 1 : !isLiked && likeIsInDB ? -1 : 0);

	return (
		<div className='wrapper'>
			<div className='username-container'>
				<img
					className='profile-img'
					src='https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg'
					alt='avatar'
				/>
				<p className='username'>{post.userId.name}</p>
			</div>
			<p className='post-content font-weight-bold'>{post.content}</p>
			<div className='likes'>
				<button
					onClick={onClickLike}
					class={isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></button>
				<span>{numberOfLikes} likes</span>
			</div>
		</div>
	);
}
