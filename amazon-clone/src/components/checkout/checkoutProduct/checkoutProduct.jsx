import React from 'react'
import './checkoutProduct.scss'

const CheckoutProduct = (props) => {
    const {id, image, title, price, rating} = props

    return (
        <div className="checkoutP">
            <img src={image} alt="" />
        </div>
    )
}

export default CheckoutProduct
