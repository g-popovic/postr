import React from 'react';
import { UserProvider } from '../provider/UserContext';
import { NewPost } from './new-post-page/NewPost';
import { Chart } from './Statistics/Statistics';
import { MyProfile } from './my-profile-page/MyProfile';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import { ExplorePage } from './explore-page/ExplorePage';
import { Metamask } from './Metamask/Metamask';
import { Profile } from './profile-page/Profile';

function App() {
	return (
		<UserProvider>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/explore' element={<ExplorePage />} />
					<Route path='/metamask' element={<Metamask />} />
					<Route path='/new-post' element={<NewPost />} />
					<Route path='/statistics' element={<Chart />} />
					<Route path='/my-profile' element={<MyProfile />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</Router>
		</UserProvider>
	);
}

export default App;
