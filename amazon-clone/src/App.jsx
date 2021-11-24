import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Header/>
				<Routes>
					<Route path="/checkout" element={<Checkout/>}/>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
