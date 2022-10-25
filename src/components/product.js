import React from 'react';

import './product.scss';

const Product = ({ imageUrl, name, price, productUrl }) => {
	return (
		<div className="product">
			<div className="image__container">
				<img className="product__image" src={imageUrl} alt={name} />
			</div>

			<div className="product__info">
				<p className="info__name">{name}</p>
				<p className="info__price">${price}</p>
				<a href={`${productUrl}`} className="info__button">
					View
				</a>
			</div>
		</div>
	);
};

export default Product;
