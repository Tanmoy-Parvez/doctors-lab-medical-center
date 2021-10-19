import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Footer = () => {
    // footer section
    return (
        <div className="footer-container bg-dark text-light p-4 pt-5">
            <div className="row">
                {/* location info */}
                <div className="col-md-4 col-12 my-4">
                    <h4>
                        <span className="green-text">Doctors Lab</span> Medical Center
                    </h4>
                    <h6 className="fw-normal">Khan Tower 2nd Floor, Pabna, Dhaka, Bangladesh.</h6>
                    <h6 className="fw-normal">Official: dlmc@gmail.com</h6>
                    <h6 className="fw-normal">Helpline : +01700112233 (Available : 09:00am to 8:00pm)</h6>
                </div>
                {/* social medias */}
                <div className="col-md-3 col-12 my-4 text-center grey-text">
                    <h3>Social Links</h3>
                    <i className="fab fa-facebook-square fs-2 mt-3"></i>
                    <i className="fab fa-linkedin fs-2 mx-4"></i>
                    <i className="fab fa-twitter-square fs-2"></i>
                    <i className="fab fa-whatsapp-square fs-2 ms-4"></i>
                </div>
                <div className="col-md-2 col-12 my-4 px-5">
                    <img src={logo} className="img-fluid" alt="" />
                </div>
                {/* some links */}
                <div className="col-md-3 col-12 my-4 nav-item ps-5">
                    <p>
                        <Link to="/home">Home</Link>
                    </p>
                    <p>
                        <Link to="/doctors">Doctors</Link>
                    </p>
                    <p>
                        <Link to="/contact">Contact Us</Link>
                    </p>
                </div>
            </div>
            <hr />
            {/* copyright */}
            <p className="text-center">&copy; Copyright 2021 || All rights reserved by <span className="green-text">Doctors Lab</span> Medical Center </p>
        </div>
    );
};

export default Footer;