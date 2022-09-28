import './App.css';

import NavBar from './components/navbar';
import Hero from './components/hero';
import Products from './components/products';
import Footer from './components/footer';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<Products />
			<Footer />
		</div>
	);
}

export default App;
