import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';
const App = () => {
	return (
		<div className="app">
			<Header/>
			<Home/>
		</div>
	);
}

export default App;
