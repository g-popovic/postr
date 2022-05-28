import LandingPage from './landing-page/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<h1>hello</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
