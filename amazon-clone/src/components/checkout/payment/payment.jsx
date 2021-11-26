import React from 'react'
import './payment.scss'
import { useStateValue } from '../../../jses/StateProvider'
import CheckoutProduct from '../checkoutProduct/checkoutProduct'
import {Link} from 'react-router-dom'

const Payment = () => {
    const [{basket, user}, dispatch]= useStateValue();

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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
