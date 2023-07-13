import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './CSSComponents/IngredientsForm.css';
import WeatherComponent from '../APIs/Weather';
import RecipeDisplay from '../APIs/RecipeDisplay';
import { ingredientAtom } from '../atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import Footer from './Footer';

/**
 * A form component for managing a list of ingredients.
 */
export default function IngredientsForm() {
	const [data, setData] = useState([]);
	const [ingredients, setIngredients] = useRecoilState(ingredientAtom);
	const [ recipes, setRecipes] = useState([]);


	/**
	 * Handles the input change event for the new ingredient input field.
	 * Updates the value of the new ingredient.
	 *
	 * @param {Object} event - The input change event.
	 */
	const handleInputChange = (event) => {
		setIngredients(event.target.value);
	};

	/**
	 * Handles the form submission event.
	 * Logs the current list of ingredients to the console.
	 *
	 * @param {Object} event - The form submission event.
	 */
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.get(
				'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
				{
					params: {
						ingredients: ingredients,
						number: '5',
						ignorePantry: 'true',
						ranking: '1',
					},
					headers: {
						'X-RapidAPI-Key':
							'8ef4a4d156msh28cd50251986f21p1ffe5fjsn5b679b0c6b48',
						'X-RapidAPI-Host':
							'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
					},
				}
			);

			setData(response.data);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
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
								<div className="ingredient-item">
									<Form.Control
										type="text"
										value={ingredients}
										name="newIngredient"
										placeholder="Enter ingredient..."
										onChange={handleInputChange}
									/>
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
			<RecipeDisplay data={data} />
		</div>
	);
}
