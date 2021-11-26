import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../jses/StateProvider'
import { auth } from '../../jses/Firebase'

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const name = user?.email.split('@');

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }

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
                <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuth} className="header__right-option">
                        <span className="header__right-option-lineOne">{user ? `Hello ${name[0]}` : 'Hello Guest'}</span>
                        <span className="header__right-option-lineTwo">{user ? 'Sign Out': 'Sign in'}</span>
                    </div>
                </Link>
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
