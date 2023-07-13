// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import '../APIs/APICSS/RecipeDisplay.css';
// import { ingredientAtom } from '../atom';
// import { useRecoilValue } from 'recoil';

// export default function RecipeDisplay() {
// 	const ingredients = useRecoilValue(ingredientAtom);
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		fetchRecipeData(); // Call the function immediately when the component mounts
// 	}, []);

// 	const fetchRecipeData = async () => {
// 		const options = {
// 			method: 'GET',
// 			url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
// 			params: {
// 				ingredients: ingredients,
// 				number: '5',
// 				ignorePantry: 'true',
// 				ranking: '1',
// 			},
// 			headers: {
// 				'X-RapidAPI-Key': '8ef4a4d156msh28cd50251986f21p1ffe5fjsn5b679b0c6b48',
// 				'X-RapidAPI-Host':
// 					'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
// 			},
// 		};

// 		try {
// 			const response = await axios.request(options);
// 			setData(response.data);
// 			console.log(response.data);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<div className="header">
// 			<h2>Recipes:</h2>
// 			{data.map((recipe) => (
// 				<div key={recipe.id}>
// 					<h3>{recipe.title}</h3>
// 					<p>{recipe.description}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
