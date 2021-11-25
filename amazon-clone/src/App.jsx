import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import Login from './pages/login/login'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './jses/Firebase';
import { useStateValue } from './jses/StateProvider';

const App = () => {
	const[{}, dispatch] =useStateValue();

	useEffect(()=> {
		 //always listening if login then this refires on logout also refires
		auth.onAuthStateChanged(authUser => {
			console.log('USER is >>> ', authUser); //good for debugging
			if(authUser){ //user just logged in/ already logged in 
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			}else{ //user logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	}, [])
	
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
