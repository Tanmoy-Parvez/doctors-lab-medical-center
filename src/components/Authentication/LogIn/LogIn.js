import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';



const LogIn = () => {

    const { user, googleSignIn, signInUser } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })
    }

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }

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
    }


    return (
        <div className="form text-center mt-5">
            <div className="container py-5">
                <img src={logo} alt="" className="w-25" height="120" />
                <div className="container w-75 mt-3">
                    <div className="bg-white w-50 mx-auto py-4 px-5 rounded-3">
                        <form onSubmit={handleSubmit}>
                            <input onBlur={handleEmail} type="email" placeholder="Enter Your Email" className="form-control mx-auto" />

                            <input onBlur={handlePassword} type="password" placeholder="Enter Your Password" className="form-control mx-auto my-4" />

                            <input style={{ backgroundColor: "#09cc84" }} type="submit" value="Sign in" className="mb-3 form-control  text-light" />
                        </form>
                        <p>New Here? <Link to="/SignUp" style={{ color: "#09cc84" }}>Create Account</Link></p>

                        --------------------- or ---------------------

                        <button onClick={handleSignIn} className="btn btn-outline-success mt-3 form-control">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25px" /> Google Sign In</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default LogIn;