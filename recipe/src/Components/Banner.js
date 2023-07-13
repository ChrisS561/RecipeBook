import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import bannerBg from '../Image/banner-bg.jpg';
import './CSSComponents/Banner.css';
import IngredientsForm from './IngredientsForm';
import WeatherComponent from '../APIs/Weather';
import image from "../Image/banner-bg.jpg"

const Banner = () => {
	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				minHeight: '100vh',
			}}
		>
			{/* <img className="scrolled-banner" alt="bg-banner" src={bannerBg} /> */}
			<IngredientsForm />
		</div>
	);
};

export default Banner;
