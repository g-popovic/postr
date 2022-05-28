import LandingPage from './landing-page/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Metamask } from './Metamask/Metamask';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<h1>hello</h1>} />
				<Route path='/metamask' element={<Metamask />} />
			</Routes>
		</Router>
	);
}

export default App;
