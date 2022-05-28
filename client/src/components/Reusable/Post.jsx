import React from 'react';

export function Post() {
	return (
		<div className='wrapper'>
			<div className='username-container'>
				<img
					className='profile-img'
					src='https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg'
					alt='avatar'
				/>
				<p className='username'>Uros Stesevic</p>
			</div>
			<p className='post-content font-weight-bold'>
				Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups.
			</p>
			<div className='likes'>
				<i class='fa-regular fa-heart'></i> <span>234 Likes</span>
			</div>
		</div>
	);
}
