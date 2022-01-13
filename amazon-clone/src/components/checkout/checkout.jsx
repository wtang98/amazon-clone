import React from 'react'
import './checkout.scss'
import { useStateValue } from '../../jses/StateProvider'
import CheckoutProduct from './checkoutProduct/checkoutProduct'
import Subtotal from './subtotal/subtotal'
import FlipMove from 'react-flip-move';

const Checkout = () => {
    const[{basket, user}, dispatch] = useStateValue();
    const name = user?.email.split('@');

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__left-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3>Hello, {user? name[0]: "Guest"}</h3>
                    <h2 className="checkout__left-title">Your shopping Basket</h2>
                    {/* <FlipMove> */}
                        {basket?.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    {/* </FlipMove> */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
