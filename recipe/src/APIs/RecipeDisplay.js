import React from 'react';
import {Card } from 'react-bootstrap';
import './APICSS/RecipeDisplay.css';

const RecipeDisplay = ({ data }) => {
	return (
		<div className="recipe-cards-container">
			{data.map((recipe) => (
				<Card key={recipe.id} className="recipe-card">
					<Card.Img
						variant="top"
						src={recipe.image}
						className="recipe-card-image"
					/>
					<Card.Body>
						<Card.Title>{recipe.title}</Card.Title>
						<Card.Text>
							<span>Used Ingredients: {recipe.usedIngredientCount}</span>
							<br />
							<span>Missed Ingredients: {recipe.missedIngredientCount}</span>
							<br />
							<span>Likes: {recipe.likes}</span>
						</Card.Text>
						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default RecipeDisplay;
