import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faGoogle,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import image from '../Image/banner-bg.jpg';
import './PagesCSS/LoadingPage.css';
import {

	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
	const [data, setData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState(false);
	const [currentUser, setCurrentUser] = useState();
	const { firstname, lastname, email, password, confirmPassword } = data;
	const navigate = useNavigate();

	const signupHandler = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCrendential) => {
				// return updateProfile(userCrendential.user, {
				// 	displayName: firstname,
				// });
			})
			.catch((error) => {
				alert(error.message);
			});
		console.log(data);
	};

	onAuthStateChanged(auth, (user) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate('/homepage');
			}
		});
	});

	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				minHeight: '100vh',
			}}
		>
			<Container
				fluid
				className="p-4 background-radial-gradient overflow-hidden"
			>
				<Row>
					<Col
						md="6"
						className="text-center text-md-start d-flex flex-column justify-content-center"
					>
						<h1
							className="my-5 display-3 fw-bold ls-tight px-3"
							style={{
								color: 'white',
								textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
							}}
						>
							Discover Delicious Recipes <br />
							<span style={{ color: 'red' }}>For Every Occasion</span>
						</h1>
						<p
							className="px-3"
							style={{
								color: 'white',
								fontSize: '18px',
								textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
							}}
						>
							Welcome to our recipe cookbook! Explore a wide range of
							mouth-watering recipes and cooking tips to elevate your culinary
							experience. Whether you're a novice cook or a seasoned chef,
							you'll find inspiration for every occasion and taste.
						</p>
					</Col>
					<Col md="6" className="position-relative">
						<div
							id="radius-shape-1"
							className="position-absolute rounded-circle shadow-5-strong"
						></div>
						<div
							id="radius-shape-2"
							className="position-absolute shadow-5-strong"
						></div>
						<Card className="my-5 bg-glass">
							<Card.Body className="p-5">
								<Row>
									<Col col="6">
										<Form.Group className="mb-4">
											<Form.Label>First name</Form.Label>
											<Form.Control
												type="text"
												name="firstname"
												onChange={signupHandler}
												value={firstname}
											/>
										</Form.Group>
									</Col>
									<Col col="6">
										<Form.Group className="mb-4">
											<Form.Label>Last name</Form.Label>
											<Form.Control
												type="text"
												name="lastname"
												onChange={signupHandler}
												value={lastname}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Form.Group className="mb-4">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										name="email"
										onChange={signupHandler}
										value={email}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										onChange={signupHandler}
										value={password}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										name="confirmPassword"
										onChange={signupHandler}
										value={confirmPassword}
									/>
								</Form.Group>
								{error && (
									<div style={{ color: 'red' }}>Password do not match</div>
								)}
								<div className="d-flex justify-content-center mb-4">
									<Form.Check
										id="flexCheckDefault"
										label="Subscribe to our newsletter"
									/>
								</div>
								<Button
									className="w-100 mb-4"
									size="md"
									variant="danger"
									type="submit"
									onClick={handleSubmit}
								>
									Sign up
								</Button>
								<div className="d-flex justify-content-center">
									<p className="ms-5">
										Already have an account?{' '}
										<a href="/" className="custom-link">
											Login Here
										</a>
									</p>
								</div>
								<div className="text-center">
									<p>or sign up with:</p>
									<Button
										tag="a"
										variant="none"
										className="mx-3"
										style={{ color: '#1266f1' }}
									>
										<FontAwesomeIcon icon={faFacebookF} size="sm" />
									</Button>
									<Button
										tag="a"
										variant="none"
										className="mx-3"
										style={{ color: '#1266f1' }}
									>
										<FontAwesomeIcon icon={faTwitter} size="sm" />
									</Button>
									<Button
										tag="a"
										variant="none"
										className="mx-3"
										style={{ color: '#1266f1' }}
									>
										<FontAwesomeIcon icon={faGoogle} size="sm" />
									</Button>
									<Button
										tag="a"
										variant="none"
										className="mx-3"
										style={{ color: '#1266f1' }}
									>
										<FontAwesomeIcon icon={faGithub} size="sm" />
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default LoadingPage;
