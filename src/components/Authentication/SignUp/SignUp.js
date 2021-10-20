import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { getAuth, updateProfile } from "firebase/auth";

const SignUp = () => {
    const auth = getAuth();
    const [errorMsg, setErrorMsg] = useState('')
    const [error, setError] = useState('')
    // redirect page
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const { googleSignIn, signUpUser } = useAuth(); // use context api

    // google sign up
    const handleSignUp = () => {
        googleSignIn()
            .then(() => {
                history.push(redirect_url);
            })
    }

    // set input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get user name
    const handleName = e => {
        setName(e.target.value);
    }
    // get user email
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    // get user password
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    // handle user sign up 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setErrorMsg("Password must be at least 6 characters!");
            return;
        }
        else {
            setErrorMsg("")
        }

        signUpUser(email, password, name)
            .then(() => {
                history.push(redirect_url);
                window.location.reload(); // reload the page to show user name;
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
            })
            .catch((error) => {
                setError(<p className="bg-danger text-white px-1 py-1 animate__animated animate__heartBeat">Email already in use!</p>);
            })
    }

    // sign up user section
    return (
        <div className="form-banner text-center mt-5">
            <div className="py-5">
                <h1 className="my-2"> <span className="text-danger">Sign Up</span> Form</h1>
                <div className="form-body mx-auto mt-3 shadow-lg pb-4 animate__animated animate__zoomInDown">
                    <img src={logo} alt="" className="w-75" height="120" />
                    <div className="mx-auto rounded-3">
                        <form onSubmit={handleSubmit}>
                            <input onBlur={handleName} type="text" placeholder="Enter Your Name" className="form-control rounded-pill px-3 mx-auto mb-4" required />

                            <input onBlur={handleEmail} type="email" placeholder="Enter Your Email" className="form-control rounded-pill px-3 mx-auto" required />

                            <input onBlur={handlePassword} type="password" placeholder="Enter Your Password" className="form-control rounded-pill px-3 mx-auto my-4" required />
                            <p className="text-danger">{errorMsg}</p>
                            <p className="text-danger">{error}</p>
                            <input style={{ backgroundColor: "#09cc84" }} type="submit" value="Sign Up" className="mb-3 form-control rounded-pill text-light" />

                        </form>
                        <p>Already have an account? <Link to="/login" style={{ color: "#09cc84" }}>Sign in</Link></p>

                        --------------------- or ---------------------
                        {/* google sign up button */}
                        <button onClick={handleSignUp} className="btn btn-outline-success rounded-pill mt-3 form-control">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25px" /> Google Sign Up</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignUp;