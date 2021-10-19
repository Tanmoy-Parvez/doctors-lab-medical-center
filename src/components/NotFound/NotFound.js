import React from 'react';
import { useHistory } from 'react-router-dom';
import errorImg from '../../images/404-png.png'

const NotFound = () => {
    const history = useHistory();

    // back to home function
    const handleGoToHome = () => {
        history.push('/home')
    }
    // not found page
    return (
        <div className="text-center marginTop mb-5 px-5">
            <div>
                <img src={errorImg} className="img-fluid" alt="" />
            </div>
            <button onClick={handleGoToHome} className="btn btn-dark mt-5">Back To Home</button>
        </div>
    );
};

export default NotFound;