import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './CSS Components/NavigationBar.css';

export const NavigationBar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="md"
				bg="dark"
				variant="dark"
				sticky="top"
				className={scrolled ? 'scrolled' : ''}
			>
				<Navbar.Brand href="/">
					<div className="logo">
						<span className="title">RecipeBank</span>
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Dropdown align="end">
							<Dropdown.Toggle
								variant="light"
								id="profile-dropdown"
								style={{
									// Updated inline styling for the profile circle
									backgroundColor: '#fc4903',
									borderRadius: '50%',
									width: '40px',
									height: '40px',
									padding: '0',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: '20px', 
								}}
							>
								<i className="fa fa-user" style={{ color: 'white' }} />
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="/profile">Profile</Dropdown.Item>
								<Dropdown.Item href="/signout">Sign Out</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
