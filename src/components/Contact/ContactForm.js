import React from 'react';
import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="contact-banner">
            <div className="row my-5 mx-5">
                <div className="col-md-6 p-5 animate__animated animate__lightSpeedInLeft">
                    <div className="mb-5">
                        <h1 className="fw-bolder"> <span className="green-text">We Love</span> To Hear From</h1>
                        <h1 className="fw-bolder">Our Patients</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-12 d-flex align-items-center border-bottom py-3">
                            <i className="fas fa-phone-alt green-text fs-1 me-5"></i>
                            <div>
                                <h5>+123 654 987</h5>
                                <h5>+023 990 789</h5>
                            </div>
                        </div>

                        <div className="col-md-12 d-flex align-items-center my-3 border-bottom py-3">
                            <i className="fas fa-envelope green-text fs-1 me-5"></i>
                            <div>
                                <h5>needhelp@gmail.com</h5>
                                <h5>info@doctorslab.com</h5>
                            </div>
                        </div>

                        <div className="col-md-12 d-flex align-items-center border-bottom py-3">
                            <i className="fas fa-map-marker-alt green-text fs-1 me-5"></i>
                            <div>
                                <h5>Khan Tower,Dhaka Road, Kashinathpur</h5>
                                <h5>Pabna, Dhaka.</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-5 mb-5 animate__animated animate__lightSpeedInRight">
                    <div className="d-flex">
                        <input type="text" className="form-control me-5 bg-light py-3" placeholder="Your Name" />
                        <input type="text" className="form-control bg-light py-3" placeholder="Your Email" />
                    </div>

                    <input type="text" className="form-control my-3 bg-light py-3" placeholder="Your Address" />
                    <input type="text" className="form-control my-3 bg-light py-3" placeholder="Subject" />
                    <textarea className="form-control bg-light py-3 h-50" placeholder="Enter Your Message" ></textarea>
                    <button className="regular-btn mt-3 d-flex align-items-center">Send Message  <i className="fas fa-arrow-alt-circle-right fs-2 ms-2"></i></button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;