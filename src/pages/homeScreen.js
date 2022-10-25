import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './homeScreen.scss';
import data from '../constants/constants.js';
import prodData from '../constants/products.js';

import HomeCard from '../components/homeCard';
import Product from '../components/product';

const HomeScreen = () => {
	const [ products, setProducts ] = useState(prodData);

	return (
		<div id="home" className="app_home">
			<div className="hero-container">
				<motion.div className="hero_info-container" animate={{ y: [ 100, 0 ], opacity: [ 0, 1 ] }}>
					<div className="hero-title">
						<h1>Welcome to</h1>
						<h1>Gooses & Squirrels</h1>
					</div>
					<div className="hero-sub">
						<h3>Love and comfort unparalleled</h3>
					</div>
					<a href={'#products'}>
						<motion.button className="hero-btn">
							<p>Shop Now</p>
						</motion.button>
					</a>
				</motion.div>
			</div>
			<div className="homeCards-container">
				{data.map((product) => {
					return <HomeCard key={product.name} name={product.name} imageUrl={product.productImageUrl} />;
				})}
			</div>
			<div id="products" className="homescreen__products">
				<h2 className="homescreen__title"> Latest Products</h2>
				<div className="products-continer">
					{products.map((product) => {
						return (
							<Product
								key={product.name}
								name={product.name}
								price={product.price}
								imageUrl={product.productImageUrl}
								productUrl={product.productUrl}
							/>
						);
					})}
				</div>
			</div>
			<div id="contact" className="contact_me-container">
				<div className="home-socials">
					<h1>Connect with us!</h1>
					<div className="socials-icons" />
				</div>
				<div />
			</div>
		</div>
	);
};

export default HomeScreen;
