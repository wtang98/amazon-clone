import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import Payment from './components/checkout/payment/payment';
import Login from './pages/login/login'
import Orders from './components/orders/orders';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './jses/Firebase';
import { useStateValue } from './jses/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51K04JxHcRDYM36RVGLFlachsqCQtvBABXgwZuGyvyldSc3T5ziElLnEDr62z4WRsEokXvlcOYHRWAkGIWaJJbfIe00JSyppbS5');

const App = () => {
	const[{basket, user}, dispatch] = useStateValue();

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
					<Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements> ]}/>
					<Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
					<Route path="/orders" element={[<Header/>,<Orders/>]}/>
					<Route path="/" redirect="/" element={[<Header/>, <Home/>]}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
