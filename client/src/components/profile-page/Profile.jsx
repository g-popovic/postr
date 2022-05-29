import React from 'react';
import { Navbar } from '../Reusable/Navbar';
import { Post } from '../Reusable/Post';
import '../my-profile-page/my-profile.scss';

export function Profile() {
	return (
		<>
			<div className='my-page-container'>
				<Navbar />
				<div className='bio'>
					<img
						className='bio-img'
						src='https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg'
						alt='avatar'
					/>
					<h1 className='bio-username'>Uros Stesevic</h1>

					<div>
						<p>
							Lorem ipsum is placeholder text commonly used in the
							graphic, print, and publishing industries for
							previewing layouts and visual mockups.
						</p>
					</div>
				</div>
				<div className='posts-container'>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</>
	);
}
