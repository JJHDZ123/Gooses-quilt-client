import React from 'react';

import heroPic from '../assets/hero.jpg';
import './hero.scss';

const Hero = () => {
	return (
		<div className="app_hero" id="home">
			<div className="hero_picture-container">
				<img src={heroPic} alt="heroPic" />
			</div>
		</div>
	);
};

export default Hero;
