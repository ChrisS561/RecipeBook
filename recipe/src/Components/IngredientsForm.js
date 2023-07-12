import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './CSS Components/IngredientsForm.css';

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


	const handleInputChange = (event) => {
		setNewIngredient(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newIngredient !== '') {
			setIngredients([...ingredients, newIngredient]);
			setNewIngredient('');
		}
	};

	const handleAdd = () => {
		if (newIngredient !== '') {
			setIngredients([...ingredients, newIngredient]);
			setNewIngredient('');
		}
	};

	const handleRemove = (index) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients.splice(index, 1);
		setIngredients(updatedIngredients);
	};

	return (
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
									Submit
								</Button>
							</div>
						</div>
					</Form>
				</div>
			</Container>
		</div>
	);
}
