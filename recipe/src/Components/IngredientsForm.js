import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './CSS Components/IngredientsForm.css';

export default function IngredientsForm() {
	const [ingredient, setIngredient] = useState('');

	const handleInputChange = (event) => {
		setIngredient(event.target.value);
	};

	return (
		<div>
			<Container className="overlay-container">
				<div className="overlay-text">
					<h1>Ingredients</h1>
					<input
						type="text"
						className="form-control"
						value={ingredient}
						onChange={handleInputChange}
						placeholder="Enter ingredients..."
					/>
				</div>
			</Container>
		</div>
	);
}
