import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import Login from './pages/login/login'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				
				<Routes>
					<Route path="/login" element={<Login/>}/>
					<Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
					<Route path="/" element={[<Header/>, <Home/>]}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
