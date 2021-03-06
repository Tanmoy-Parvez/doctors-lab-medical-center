import React from 'react';
import './Banner.css'
import doctorImg from '../../images/banner-doctors2.png';
import doctorImg2 from '../../images/doctors-banner.png';
import logo from '../../images/logo.png'
import 'animate.css';

// header banner section
const Banner = () => {
    return (
        <div className="banner marginTop">
            <div className="row">
                {/* banner image */}
                <div className="col-md-4 col-12">
                    <div className="mt-5">
                        <img src={doctorImg2} className="mt-4 img-fluid animate__animated animate__fadeInLeft" alt="" />
                    </div>
                </div>
                {/* header details */}
                <div className="col-md-4 col-12 text-center animate__animated animate__zoomIn">
                    <img src={logo} className="w-75" alt="" />
                    <h3 className="text-secondary fw-normal text-uppercase">Professional Health Care</h3>
                    <h3> <span className="green-text fw-bold text-uppercase">Doctors Lab</span> <span className="text-secondary fw-normal text-uppercase">Medical Center</span> </h3>
                    <p className="text-secondary fw-normal fs-5 mt-4">
                        Find the best information about living a healthier life from the trusted medical team. Trusted advice for a healthier life.
                    </p>
                </div>
                {/* banner image */}
                <div className="col-md-4 col-12">
                    <div className="mt-4">
                        <img src={doctorImg} className="mt-5 img-fluid animate__animated animate__fadeInRight" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;