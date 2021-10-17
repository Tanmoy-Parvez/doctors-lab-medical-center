import React from 'react';

const Footer = () => {
    // footer section
    return (
        <div className="footer-container bg-dark text-light p-4 pt-5">
            <div className="row">
                {/* location info */}
                <div className="col-md-5">
                    <h4>
                        <span className="text-success">Doctors Lab</span> Medical Center
                    </h4>
                    <h6 className="fw-normal">AR Corner 2nd Floor, Pabna, Dhaka, Bangladesh.</h6>
                    <h6 className="fw-normal">Official: thctc@gmail.com</h6>
                    <h6 className="fw-normal">Helpline : +01700112233 (Available : 09:00am to 8:00pm)</h6>
                </div>
                {/* social medias */}
                <div className="col-md-2 text-center">
                    <h3>Social Links</h3>
                    <i className="fab fa-facebook-square fs-2 mt-3"></i>
                    <i className="fab fa-linkedin fs-2 mx-4"></i>
                    <i className="fab fa-twitter-square fs-2"></i>
                    <i className="fab fa-whatsapp-square fs-2 ms-4"></i>
                </div>
                {/* Subscribe */}
                <div className="col-md-5">
                    <h3 className="ms-5 ps-3">Subscribe:</h3>
                    <div class="input-group w-75 mx-auto">
                        <input type="text" className="form-control" placeholder="Enter your email address" />
                        <button className="btn btn-success" type="button">Send</button>
                    </div>
                    <p className="mt-3 ms-5 ps-3">Get our latest news and updates right at your inbox </p>
                </div>

            </div>
            <hr />
            {/* copyright */}
            <p className="text-center">&copy; Copyright 2021 || All rights reserved by <span className="text-success">Doctors Lab</span> Medical Center </p>
        </div>
    );
};

export default Footer;