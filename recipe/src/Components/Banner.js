import React from 'react';
import './CSSComponents/Banner.css';
import IngredientsForm from './IngredientsForm';
import WeatherComponent from '../APIs/Weather';

import Footer from './Footer';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-bg"></div>
			<div className="banner-content">
				<IngredientsForm />
				<WeatherComponent />
			</div>
			<Footer />
		</div>
	);
};

export default Banner;
