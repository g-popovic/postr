import React, { useContext, useState } from 'react';
import { UserContext } from '../../provider/UserContext';

export function Post({ post }) {
	const [userData] = useContext(UserContext);
	const [isLiked, setIsLiked] = useState(
		post && post.likes && post.likes.find(like => like === userData.user.id),
	);

	if (!post) {
		return null;
	}

	function onClickLike() {
		if (userData.user) {
			setIsLiked(prev => !prev);
		} else {
			alert('You need to login to like posts');
		}
	}

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
				<span>{post.likes.length + (isLiked ? 1 : 0)} likes</span>
			</div>
		</div>
	);
}
