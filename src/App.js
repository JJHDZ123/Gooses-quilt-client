import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import ScrollButton from './components/scrollButton';
import Footer from './components/footer';

import HomeScreen from './pages/homeScreen';
import ProductsScreen from './pages/productsScreen';

function App() {
	return (
		<div className="App">
			<Router>
				<div className="app_bodyWrapper">
					<NavBar />
					<Routes>
						<Route exact path="/" element={<HomeScreen />} />
						<Route exact path="/product" element={<ProductsScreen />} />
					</Routes>
				</div>
				<ScrollButton />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
