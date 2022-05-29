import React, { useContext, useEffect } from 'react';
import { UserContext, UserProvider } from '../provider/UserContext';
import { NewPost } from './new-post-page/NewPost';
import { Chart } from './Statistics/Statistics';
import { MyProfile } from './my-profile-page/MyProfile';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import { ExplorePage } from './explore-page/ExplorePage';
import { Metamask } from './Metamask/Metamask';
import { Profile } from './profile-page/Profile';
import { axiosApp } from '../util/config';

function App() {
	const [_, setUserData] = useContext(UserContext);

	useEffect(() => {
		fetchAndSetUserData();
	}, []);

	async function fetchAndSetUserData() {
		const { data: userData } = await axiosApp.get('/auth/status');
		setUserData(userData);
	}

	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/explore' element={<ExplorePage />} />
				<Route path='/metamask' element={<Metamask />} />
				<Route path='/new-post' element={<NewPost />} />
				<Route path='/statistics' element={<Chart />} />
				<Route path='/my-profile' element={<Profile />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
