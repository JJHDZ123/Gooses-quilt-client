import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './homeScreen.scss';
import data from '../constants/constants.js';

import HomeCard from '../components/homeCard';

const HomeScreen = () => {
	return (
		<div className="app_home">
			<div className="hero-container">
				<motion.div className="hero_info-container" animate={{ y: [ 100, 0 ], opacity: [ 0, 1 ] }}>
					<div className="hero-title">
						<h1>Welcome to</h1>
						<h1>Gooses & Squirrels</h1>
					</div>
					<div className="hero-sub">
						<h3>Love and comfort unparalleled</h3>
					</div>
					<Link to={'/products'}>
						<motion.button className="hero-btn">
							<p>Shop Now</p>
						</motion.button>
					</Link>
				</motion.div>
			</div>
			<div className="homeCards-container">
				{data.map((product) => {
					return <HomeCard key={product.name} name={product.name} imageUrl={product.productImageUrl} />;
				})}
			</div>
			<div className="contact_me-container">
				<h1>Contact</h1>
			</div>
		</div>
	);
};

export default HomeScreen;
