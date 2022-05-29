import React from 'react';

export function Post({ data }) {
	const { content, likes, userId } = data;
	return (
		<div className='wrapper'>
			<div className='username-container'>
				<img
					className='profile-img'
					src='https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg'
					alt='avatar'
				/>
				<p className='username'>{userId.name}</p>
			</div>
			<p className='post-content font-weight-bold'>{content}</p>
			<div className='likes'>
				<i class='fa-regular fa-heart'></i> <span>{likes.length} Likes</span>
			</div>
		</div>
	);
}
