import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Register = () => {
    const { user, googleSignIn, signUpUser } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleSignUp = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })

    }


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUpUser(email, password, name)
    }

    return (
        <div className="form text-center">
            <div className="container py-5">
                <img src={logo} alt="" className="w-25" height="120" />
                <div className="container w-75 mt-3">
                    <div className="bg-white w-50 mx-auto py-4 px-5 rounded-3">
                        <form onSubmit={handleSubmit}>
                            <input onBlur={handleName} type="text" placeholder="Enter Your Name" className="form-control  mx-auto mb-4" />

                            <input onBlur={handleEmail} type="email" placeholder="Enter Your Email" className="form-control  mx-auto" />

                            <input onBlur={handlePassword} type="password" placeholder="Enter Your Password" className="form-control mx-auto my-4" />

                            <input type="submit" value="Sign Up" className="mb-3 form-control bg-danger text-light" />
                        </form>
                        <p>Already have an account? <Link to="/login" className="text-danger">Login</Link></p>

                        --------------------- or ---------------------

                        <button onClick={handleSignUp} className="btn btn-outline-secondary mt-3 form-control">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25px" /> Google Sign Up</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;