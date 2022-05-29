import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from '../Reusable/Navbar';
import { Post } from '../Reusable/Post';
import '../my-profile-page/my-profile.scss';
import { axiosApp } from '../../util/config';
import { UserContext } from '../../provider/UserContext';

export function Profile({ canEdit }) {
	const [userData] = useContext(UserContext);
	const [posts, setPosts] = useState();

	async function getAndFetchPosts() {
		try {
			const response = await axiosApp.get('/posts/all');
			setPosts(response.data.posts);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getAndFetchPosts();
	}, []);

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
							Lorem ipsum is placeholder text commonly used in the graphic, print, and
							publishing industries for previewing layouts and visual mockups.
						</p>
					</div>
				</div>
				<div className='posts-container'>
					{!posts ? (
						<h4 className='text-center text-light h-100'>Loading...</h4>
					) : (
						posts.map(post => <Post post={post} />)
					)}
				</div>
			</div>
		</>
	);
}
