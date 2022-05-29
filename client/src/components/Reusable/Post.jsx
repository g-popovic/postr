import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Post() {
	const [class1, setClass1] = useState(false);

	function handleClick() {
		setClass1(!class1);
	}

	return (
		<div className='wrapper'>
			<Link to='/profile'>
				<div className='username-container'>
					<img
						className='profile-img'
						src='https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg'
						alt='avatar'
					/>
					<p className='username'>Uros Stesevic</p>
				</div>
			</Link>
			<p className='post-content font-weight-bold'>
				Lorem ipsum is placeholder text commonly used in the graphic,
				print, and publishing industries for previewing layouts and
				visual mockups.
			</p>
			<div className='likes'>
				<button
					onClick={handleClick}
					class={class1 ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
				></button>{' '}
				<span>234 Likes</span>
			</div>
		</div>
	);
}
