import React, {useState} from 'react'
import "./login.scss"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from '../../jses/Firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
                console.log(auth);
                if(auth){
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to ="/" style={{ textDecoration: 'none' }}>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password}  onChange={e=> setPassword(e.target.value)} />
                    <button className="login__container-loginB" type="submit" onClick={signIn} >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to FAKE AMAZON's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login__container-registerB" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
