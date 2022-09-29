import React, { Fragment, useState } from 'react';

import './navbar.scss';

const NavBar = () => {
	const [ isToggled, setIsToggled ] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};

	console.log(isToggled);

	return (
		<Fragment>
			<div className="app_navbar">
				<h1>Goose & Squirrel</h1>
				<ul className="app__navbar-links">
					{[ 'home', 'products', 'about' ].map((item) => {
						return (
							<li className="app__flex p-text" key={`link-${item}`}>
								<a href={`#${item}`}>{item}</a>
							</li>
						);
					})}
				</ul>
				<div className="app_navbar-burgir" onClick={handleToggle}>
					<div className="borgir-container">
						<div />
						<div />
						<div />
					</div>

					{isToggled && (
						<ul className="app__navbar-links">
							{[ 'home', 'products', 'about' ].map((item) => {
								return (
									<li className="app__flex p-text" key={`link-${item}`}>
										<a href={`#${item}`}>{item}</a>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default NavBar;
