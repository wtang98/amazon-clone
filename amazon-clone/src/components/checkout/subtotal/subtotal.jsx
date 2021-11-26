import React, { useEffect, useState } from 'react'
import './subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../../jses/StateProvider'
import { getBasketTotal } from '../../../jses/reducer'
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const navigate  = useNavigate();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=> (
                    <> 
                    {/* figureout below line*/}
                        <p>SubTotal ({basket.length} items): <strong>{value}</strong></p> 
                        <small className="subtotal__gift">
                            <input type="checkbox" />&nbsp; This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // figureout below line
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button onClick={e=> navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
