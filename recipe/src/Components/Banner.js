import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import bannerBg from '../Image/banner-bg.jpg';
import './CSS Components/Banner.css';
import IngredientsForm from './IngredientsForm';

const Banner = () => {
	return (
		<div className="banner">
			<img className="scrolled-banner" alt="bg-banner" src={bannerBg} />
					<IngredientsForm />
				</div>

	);
};

export default Banner;
