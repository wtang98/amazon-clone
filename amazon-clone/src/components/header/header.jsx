import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../jses/StateProvider'

const Header = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            
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
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className="header__right-optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__right-option-lineTwo header__right-optionBasket-count">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>



        </div>
    )
}

export default Header
