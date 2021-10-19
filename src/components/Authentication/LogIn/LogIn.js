import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './LogIn.css'



const LogIn = () => {
    // use context api
    const { googleSignIn, signInUser } = useAuth();
    const [error, setError] = useState('');

    // direct access
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    // handle google sign
    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })
    }

    //set input values 
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // get input value from email field
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    // get input value from password field
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    //handle submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signInUser(email, password)
            .then((result) => {
                history.push(redirect_url);
            })
            .catch((error) => {
                setError("Incorrect email or password! Try again")
            })
    }

    // sign in or log in section
    return (
        <div className="form-banner text-center mt-5">
            <div className="py-5">
                <img src={logo} alt="" className="w-25" height="120" />
                <div className="form-body mx-auto">
                    <form onSubmit={handleSubmit}>
                        <input onBlur={handleEmail} type="email" placeholder="Enter Your Email" className="form-control mx-auto" required />

                        <input onBlur={handlePassword} type="password" placeholder="Enter Your Password" className="form-control mx-auto my-4" required />

                        <input style={{ backgroundColor: "#09cc84" }} type="submit" value="Sign in" className="mb-3 form-control text-light" />
                        <p className="text-danger">{error}</p>
                    </form>
                    <p>New Here? <Link to="/SignUp" style={{ color: "#09cc84" }}>Create Account</Link></p>

                    --------------------- or ---------------------
                    {/* google sign in button */}
                    <button onClick={handleSignIn} className="btn btn-outline-success mt-3 form-control">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25px" /> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;