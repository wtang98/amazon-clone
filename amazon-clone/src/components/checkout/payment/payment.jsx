import React, {useEffect, useState} from 'react'
import './payment.scss'
import { useStateValue } from '../../../jses/StateProvider'
import CheckoutProduct from '../checkoutProduct/checkoutProduct'
import {Link, useNavigate} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../../jses/reducer'
import { db } from '../../../jses/Firebase'
import axios from '../../../jses/axios';

//important as you are dealing with peoples money
const Payment = () => {
    //npm install stripe, create axios file and npm axios, 
    //firebase init functions(creates function folder, kinda a full backend/ need to cd into folder)
    //be careful with npm install now any time u install has to be in the functions folder now
    const [{basket, user}, dispatch]= useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true)

    const stripe = useStripe();
    const element = useElements();
    const navigate = useNavigate();
    
    useEffect(()=> {
        //generat the client secret for stripe. when ever the basket changes a new secret is made
        //basket in square barket means every change to basket the useeffect fires again.
        //take care when writing these lines of code. dont mess with peoples money
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits so for penny=pound*100
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret(); //call function in the useeffect- its how you run an ansyc func in a useeffect
    }, [basket])
    
    // console.log("the secret is >>>", clientSecret);//hide this lool

    const handleSubmit = async(e) => {
        //handles stripe stuff
        e.preventDefault();
        setProcessing(true);
        //any payment platform needs a client secret. we do this using a state
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {// uses the client secret to know how much to charge
                card: element.getElement(CardElement)// imported at the top and then instantiated
            }
        }).then(({paymentIntent}) => {//.then cos its a promise
            //paymentIntent = payment confirmation
            db
                .collection('users')
                .doc(user?.uid)// id seems to work the same but its should be uid but that doesnt work??? 
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            navigate('/orders')
        })
        //const payload = await stripe 
    }

    const handleChange = (e) => {
        //listens for changes in the <CardElement/>. (the card deets bit)
        //and then displays any errors as the customer types their card deets
        setDisabled(e.empty);
        setError(e.error? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout" style={{ textDecoration: 'none', color:'inherit' }}>{basket?.length} items</Link>)
                </h1>
                <div className="payment__container-section">
                    <div className="payment__container-section-title">
                        <h3>delivery address</h3>
                    </div>
                    <div className="payment__container-section-address">
                        <p>{user?.email}</p>
                    </div>
                </div>
                <div className="payment__container-section">
                    <div className="payment__container-section-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__container-section-items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id} 
                                title={item.title} 
                                price={item.price} 
                                rating={item.rating} 
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__container-section">
                    <div className="payment__container-section-title">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment__container-section-details">
                        <form onSubmit={handleSubmit} action="">
                            <CardElement onChange={handleChange}/>
                            <div className="payment__container-section-details-priceContainer">
                                <CurrencyFormat
                                    renderText={(value)=> ( //value is grabbed from the getBasketTotal(basket)
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={"£"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing?<p>Processing</p>: "Buy Now"}</span>
                                </button>
                                {/* error handler, state written above */}
                                {error&& <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
