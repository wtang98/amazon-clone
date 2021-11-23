import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

const Header = () => {
    return (
        <div className="header">
            
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            
            <div className="header__search">
                <input type="text" className="header__search-input" />
                <SearchIcon className="header__search-icon"/>
            </div>
            
            <div className="header__right">
                <div className="header__right-option">
                    <span className="header__right-option-lineOne">hello</span>
                    <span className="header__right-option-lineTwo">Sign In</span>
                </div>
                <div className="header__right-option">
                    <span className="header__right-option-lineOne">Returns</span>
                    <span className="header__right-option-lineTwo">& Orders</span>
                </div>
                <div className="header__right-option">
                    <span className="header__right-option-lineOne">Your</span>
                    <span className="header__right-option-lineTwo">Prime</span>
                </div>
                <div className="header__right-optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__right-option-lineTwo header__right-optionBasket-count">
                        0
                    </span>
                </div>
            </div>



        </div>
    )
}

export default Header
