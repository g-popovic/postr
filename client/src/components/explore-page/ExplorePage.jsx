import React, { useContext } from 'react';
import { UserContext } from '../../provider/UserContext';
import { Navbar } from '../Reusable/Navbar';
import { Post } from '../Reusable/Post';
import './explore.scss';

export function ExplorePage() {
	const [data] = useContext(UserContext);

	console.log(data);

	return (
		<>
			<div className='page-container'>
				<Navbar />
				<div className='posts-container'>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
			{data.showLandingPageIntro && <div className='intro-overlay' />}
		</>
	);
}
