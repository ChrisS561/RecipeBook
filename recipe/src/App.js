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

function App() {
	return (
		<RecoilRoot>
			<NavigationBar />
			<Banner />
		</RecoilRoot>
	);
}

export default App;
