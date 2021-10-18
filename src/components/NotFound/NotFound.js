import React from 'react';
import { useHistory } from 'react-router-dom';
import errorImg from '../../images/404-png.png'

const NotFound = () => {
    const history = useHistory();
    const handleGoToHome = () => {
        history.push('/home')
    }
    return (
        <div className="text-center my-5">
            <div>
                <img src={errorImg} alt="" />
            </div>
            <button onClick={handleGoToHome} className="btn btn-dark mt-5">Back To Home</button>
        </div>
    );
};

export default NotFound;