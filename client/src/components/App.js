import LandingPage from './landing-page/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Metamask } from './Metamask/Metamask';
import { ExplorePage } from './explore-page/ExplorePage';
import React from 'react';
import { UserProvider } from '../provider/UserContext';

function App() {
	return (
		<UserProvider>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/explore' element={<ExplorePage />} />
					<Route path='/metamask' element={<Metamask />} />
				</Routes>
			</Router>
		</UserProvider>
	);
}

export default App;
