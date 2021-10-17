import React from 'react';
import './Banner.css'
import doctorImg from '../../images/banner-doctors.png';
import 'animate.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6 mt-5">
                    <div className="mt-5 ms-5">
                        <img src={doctorImg} className="mt-4 animate__animated animate__fadeInRight" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;