import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import Banner from './Components/Banner';
import WeatherComponent from './APIs/Weather';


function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Banner />
			<WeatherComponent/>
		</div>
	);
}

export default App;
