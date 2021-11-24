import React from 'react'
import './checkout.scss'
import CheckoutProduct from './checkoutProduct/checkoutProduct'
import Subtotal from './subtotal/subtotal'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__left-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout__left-title">Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
            <div>
                <h2 className="checkout__title"></h2>
                <CheckoutProduct/>
            </div>
        </div>
    )
}

export default Checkout
