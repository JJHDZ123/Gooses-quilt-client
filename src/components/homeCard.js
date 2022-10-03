import React from 'react';
import productsScreen from '../pages/productsScreen';

import './homeCard.scss';

const HomeCard = (props) => {
	return (
		<div className="app_homeCard">
			<div className="homeCard_img-container">
				<img src={props.imageUrl} />
			</div>
			<h2>{props.name}</h2>
		</div>
	);
};

export default HomeCard;