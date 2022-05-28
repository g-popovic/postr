import LandingPage from './landing-page/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Metamask } from './Metamask/Metamask';
import { ExplorePage } from './explore-page/ExplorePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<ExplorePage />} />
                <Route path='/metamask' element={<Metamask />} />
            </Routes>
        </Router>
    );
}

export default App;
