import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';


const LogIn = () => {
    const { user, googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })

    }
    return (
        <div className="form text-center">
            <div className="container py-5">
                <img src={logo} alt="" className="w-25" height="120" />
                <div className="container w-75 mt-3">
                    <div className="bg-white w-50 mx-auto py-4 px-5 rounded-3">
                        <form>
                            <input type="email" placeholder="Enter Your Email" className="form-control  mx-auto" />
                            <input type="password" placeholder="Enter Your Password" className="form-control mx-auto my-4" />
                            <input type="submit" value="Sign in" className="mb-3 form-control bg-danger text-light" />
                        </form>
                        <p>New Here? <Link to="/register" className="text-danger">Create Account</Link></p>

                        --------------------- or ---------------------

                        <button onClick={handleSignIn} className="btn btn-outline-secondary mt-3 form-control">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25px" /> Google Sign In</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default LogIn;