import React from 'react';
import './Banner.css'
import doctorImg from '../../images/banner-doctors2.png';
import doctorImg2 from '../../images/doctors-banner.png';
import logo from '../../images/logo.png'
import 'animate.css';

const Banner = () => {
    return (
        <div className="banner marginTop">
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-5">
                        <img src={doctorImg2} className="mt-4 img-fluid animate__animated animate__fadeInLeft" alt="" />
                    </div>
                </div>
                <div className="col-md-4 text-center animate__animated animate__zoomIn">
                    <img src={logo} className="w-75" alt="" />
                    <h2 className="text-secondary fw-normal fs-2">Professional Health Care</h2>
                    <h2> <span className="green-text fw-bold">Doctors Lab</span> <span className="text-secondary fw-normal">Medical Center</span> </h2>
                    <p className="text-secondary fw-normal fs-5 mt-4">
                        Find the best information about living a healthier life from the trusted medical team. Trusted advice for a healthier life.
                    </p>
                </div>
                <div className="col-md-4">
                    <div className="mt-4">
                        <img src={doctorImg} className="mt-5 img-fluid animate__animated animate__fadeInRight" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;