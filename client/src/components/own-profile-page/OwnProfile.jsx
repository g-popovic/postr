import React from 'react';
import { Navbar } from '../Reusable/Navbar';
import { Post } from '../Reusable/Post';
import './own-profile.scss';

export function OwnProfile() {
	return (
		<div className='own-page-container'>
			<Navbar />
			<div className='posts-container'>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}
