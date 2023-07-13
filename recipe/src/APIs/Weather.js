import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './APICSS/Weather.css'; // Import the CSS file for styling

export default function WeatherComponent() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeatherData = async (latitude, longitude) => {
			const options = {
				method: 'GET',
				url: 'https://weatherapi-com.p.rapidapi.com/current.json',
				params: { q: `${latitude},${longitude}` },
				headers: {
					'X-RapidAPI-Key':
						'8ef4a4d156msh28cd50251986f21p1ffe5fjsn5b679b0c6b48',
					'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
				},
			};

			try {
				const response = await axios.request(options);
				setData([response.data]);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
				setError('Failed to fetch weather data');
				setIsLoading(false);
			}
		};

		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						fetchWeatherData(latitude, longitude);
					},
					(error) => {
						console.error(error);
						setError('Failed to retrieve location');
						setIsLoading(false);
					}
				);
			} else {
				setError('Geolocation is not supported by your browser');
				setIsLoading(false);
			}
		};

		getLocation();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className="weather-container">
			{data.map((weatherData, index) => (
				<div key={index} className="weather-box">
					<h2 className="location">{weatherData.location.name}</h2>
					<p className="date-time">
						Date and time:{' '}
						{new Date(weatherData.location.localtime).toLocaleString(
							undefined,
							{
								month: "numeric",
								day: "numeric",
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							}
						)}
					</p>
					<p className="temperature">
						Temperature: {weatherData.current.temp_f}°F
					</p>
					<p className="feels-like">
						Feels like: {weatherData.current.feelslike_f}°F
					</p>
					<p className="humidity">Humidity: {weatherData.current.humidity}%</p>
				</div>
			))}
		</div>
	);
}
