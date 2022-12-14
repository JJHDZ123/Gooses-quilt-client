import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
	const [ backToTop, setBackToTop ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackToTop(true);
			} else {
				setBackToTop(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {
				if (window.scrollY > 100) {
					setBackToTop(true);
				} else {
					setBackToTop(false);
				}
			});
		};
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top      : 0,
			behavior : 'smooth'
		});
	};

	return (
		<div>
			{backToTop && (
				<button
					style={{
						position : 'fixed',
						bottom   : '50px',
						right    : '50px',
						height   : '50px',
						width    : '50px',
						fontSize : '50px'
					}}
					onClick={scrollUp}
					className="goTop"
				>
					UP
				</button>
			)}
		</div>
	);
};

export default ScrollButton;
