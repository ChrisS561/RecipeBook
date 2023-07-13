import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import Banner from './Components/Banner';
import WeatherComponent from './APIs/Weather';
import RecipeDisplay from './APIs/RecipeDisplay';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import Footer from './Components/Footer';

function App() {
	return (
		<RecoilRoot>
			<NavigationBar />
			<Banner />
			<Footer/>
		</RecoilRoot>
	);
}

export default App;
