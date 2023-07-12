import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import bannerBg from '../Image/banner-bg.jpg';
import './CSS Components/Banner.css';
import IngredientsForm from './IngredientsForm';

const Banner = () => {
	return (
		<div className="banner">
			<img className="scrolled-banner" alt="bg-banner" src={bannerBg} />

			<div className="overlay">
				<div className="welcome-message">
					<Container className='container'>
						<h1>Welcome to Our Recipe Search!</h1>
						<p>Enter the ingredients you want to search for:</p>
					</Container>
					<IngredientsForm />
				</div>
			</div>
		</div>
	);
};

export default Banner;
