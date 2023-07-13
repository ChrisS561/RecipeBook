import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faGoogle,
	faInstagram,
	faLinkedinIn,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<div 
			className="text-center p-3"
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
		>
			© 2023 RecipeCookBook
		</div>
	);
}
