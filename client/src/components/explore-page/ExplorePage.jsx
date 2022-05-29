import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../provider/UserContext';
import { Navbar } from '../Reusable/Navbar';
import { Post } from '../Reusable/Post';
import './explore.scss';

export function ExplorePage() {
	const [data, setData] = useContext(UserContext);

	useEffect(() => {
		if (data.showLandingPageIntro) {
			setTimeout(
				() => setData({ ...data, showLandingPageIntro: false }),
				2500
			);
		}
	}, [data]);

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
