import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import Banner from './Components/Banner';
import {
	RecoilRoot,
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
