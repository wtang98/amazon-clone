import React, { useEffect, useState } from 'react'
import './subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../../jses/StateProvider'
import { getBasketTotal } from '../../../jses/reducer'

const Subtotal = () => {
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
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal