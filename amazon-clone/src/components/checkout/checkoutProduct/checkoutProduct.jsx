import React from 'react'
import { useStateValue } from '../../../jses/StateProvider'
import './checkoutProduct.scss'

const CheckoutProduct = (props) => {
    const {id, image, title, price, rating} = props
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutP">
            <img className="checkoutP__image" src={image} alt="" />
            <div className="checkoutP__info">
                <p className="checkoutP__info-title">{title}</p>
                <p className="checkoutP__info-price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutP__info-rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
