import React, { useEffect, useState } from 'react'
import './subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../../jses/StateProvider'
import { getBasketTotal } from '../../../jses/reducer'
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const navigate  = useNavigate();
    const [{basket}, dispatch] = useStateValue();

    const proceedToC = () => {
        if(basket.length>0){
            navigate('/payment')
        }else{
            window.alert("Add an item to your basket")
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=> (
                    <> 
                        <p>SubTotal ({basket.length} items): <strong>{value}</strong></p> 
                        <small className="subtotal__gift">
                            <input type="checkbox" />&nbsp; This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button onClick={proceedToC}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
