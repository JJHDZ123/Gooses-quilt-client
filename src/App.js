import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/navbar';
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
						<Route exact path="/" element={<Navigate to="/home" />} />
						<Route exact path="/home" element={<HomeScreen />} />
						<Route exact path="/products" element={<ProductsScreen />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
