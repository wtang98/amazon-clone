import React from 'react'
import "./login.scss"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <Link to ="/" style={{ textDecoration: 'none' }}>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__container-loginB">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to FAKE AMAZON's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__container-registerB">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
