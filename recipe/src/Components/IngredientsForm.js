import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './CSSComponents/IngredientsForm.css';
import WeatherComponent from '../APIs/Weather';

/**
 * A form component for managing a list of ingredients.
 */
export default function IngredientsForm() {
	const [ingredients, setIngredients] = useState([]);
	const [newIngredient, setNewIngredient] = useState('');
	const [newhidden, setNewHidden] = useState(false);

	useEffect(() => {
		if (ingredients.length >= 5) {
			setNewHidden(true);
		} else {
			setNewHidden(false);
		}
	}, [ingredients]);

	/**
	 * Handles the input change event for the new ingredient input field.
	 * Updates the value of the new ingredient.
	 *
	 * @param {Object} event - The input change event.
	 */
	const handleInputChange = (event) => {
		setNewIngredient(event.target.value);
	};

	/**
	 * Handles the form submission event.
	 * Logs the current list of ingredients to the console.
	 *
	 * @param {Object} event - The form submission event.
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Submitting form:', ingredients);
	};

	/**
	 * Handles the click event for the "Add" button.
	 * Adds the new ingredient to the list of ingredients.
	 * Clears the input field.
	 */
	const handleAdd = () => {
		if (newIngredient !== '') {
			setIngredients([...ingredients, newIngredient]);
			setNewIngredient('');
		}
	};

	/**
	 * Handles the click event for removing an ingredient.
	 * Removes the ingredient at the specified index from the list of ingredients.
	 *
	 * @param {number} index - The index of the ingredient to be removed.
	 */
	const handleRemove = (index) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients.splice(index, 1);
		setIngredients(updatedIngredients);
	};

	return (
		<div>
			<div className="overlay-container">
				<Container>
					<div className="overlay-text">
						<h1>Welcome to Our Recipe Search!</h1>
						<p>Enter the ingredients you want to search for:</p>
						<Form onSubmit={handleSubmit}>
							<div className="input-container">
								{ingredients.map((ingredient, index) => (
									<div key={index} className="ingredient-item">
										<Form.Control
											type="text"
											value={ingredient}
											name={`ingredient${index}`}
											placeholder="Enter ingredient..."
											readOnly
										/>
										<Button
											className="remove-button"
											size="sm"
											variant="danger"
											onClick={() => handleRemove(index)}
										>
											Remove
										</Button>
									</div>
								))}
								<div className="ingredient-item">
									<Form.Control
										type="text"
										value={newIngredient}
										name="newIngredient"
										placeholder="Enter ingredient..."
										onChange={handleInputChange}
										hidden={newhidden}
									/>
									<Button
										className="add-button"
										size="sm"
										onClick={handleAdd}
										disabled={newIngredient === ''}
										hidden={newhidden}
									>
										Add
									</Button>
								</div>
								<div className="d-flex justify-content-center ">
									<Button className="submit-button" size="md" type="submit">
										Search
									</Button>
								</div>
							</div>
						</Form>
					</div>
				</Container>
			</div>
		</div>
	);
}
