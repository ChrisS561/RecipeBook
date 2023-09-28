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
import './PagesCSS/Login.css';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

function Login() {
	const [data, setData] = useState({ username: '', password: '' });
	const [bypassClicked, setBypassClicked] = useState(false);
	const { username, password } = data;
	const navigate = useNavigate();

	const facebookSignIn = () => { 
		const provider = new FacebookAuthProvider()
		signInWithPopup(auth,provider)
	}
	const handleFaceBookSignIn = async () => { 
		try {
			await facebookSignIn();
		} catch (error) {
			alert(error.message)
		}
	}

	const googleSignIn = () => { 
		const provider = new GoogleAuthProvider(); 
		signInWithRedirect(auth,provider)
	}

	const handleGoogleSignIn = async () => { 
		try {
			await googleSignIn()
		} catch (error) {
			alert(error.message)
		}
	}


	const loginHandler = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, username, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				alert(error.message);
			});
		console.log(data);
	};

	const handleBypassClick = () => {
		setData({ ...data, username: "test@test.com", password: "testtest" });

	};

	onAuthStateChanged(auth, (user) => {
		if (user) {
			navigate('/homepage');
		}
	});
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Container
				fluid
				className="p-4 background-radial-gradient overflow-hidden"
			>
				<Row className="justify-content-center">
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
									<Col md="6"></Col>
									<Col md="6"></Col>
								</Row>

								<Form.Group className="mb-4">
									<Form.Label>Email</Form.Label>
									<Form.Control
										placeholder="Enter email here"
										type="email"
										name="username"
										onChange={loginHandler}
										value={username}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label>Password</Form.Label>
									<Form.Control
										placeholder="Enter password here"
										type="password"
										name="password"
										onChange={loginHandler}
										value={password}
									/>
								</Form.Group>
								<Button
									className="w-100 mb-4"
									size="md"
									variant="danger"
									type="submit"
									onClick={submitHandler}
								>
									Sign in
								</Button>

								<div className="text-center">
									<p>or sign in with:</p>
									<Button
										tag="a"
										variant="none"
										className="mx-3"
										style={{ color: '#1266f1' }}
										onClick={handleFaceBookSignIn}
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
										onClick={handleGoogleSignIn}
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
									<div className="d-flex justify-content-center">
										<p className="ms-5">
											Already have an account?{' '}
											<a href="/signup" className="custom-link">
												Sign up
											</a>
										</p>
									</div>
									<Button
										tag="a"
										variant='success'
										className="mx-3"
										onClick={handleBypassClick}
										style={{ color: 'white' }}
									>
										Press to bypass Sign in
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

export default Login;
