import React from 'react'
import { useStateValue } from '../../../jses/StateProvider'
import './product.scss'

const Product = (props) => {
    const {id, title, image, price, rating} = props

    const [{basket}, dispatch] = useStateValue();// pulls data from the data layer
    // console.log("this is basket >>>", basket)

    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__info-price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__info-rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
