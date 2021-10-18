import React from 'react';
import doctor1 from '../../images/doctors-image/doctor-mike.jpg';
import doctor2 from '../../images/doctors-image/doctor-denial.jpg';
import doctor3 from '../../images/doctors-image/doctor-ema.jpg';
import doctor4 from '../../images/doctors-image/john son-6.jpg';

const Doctors = () => {
    return (
        <div className="text-center marginTop">
            <h1 className="my-5">Our Expert <span className="green-text">Doctors</span> </h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                    <div className="col">
                        <div className="card h-100">
                            <img src={doctor1} className="card-img-top p-2" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Michale Hardson (Mike)</h5>
                                <p className="card-text green-text fw-bold">Heart Specialist</p>
                                <div className="d-flex grey-text align-items-center justify-content-around">
                                    <i className="fab fa-facebook-square fs-2"></i>
                                    <i className="fab fa-linkedin fs-2"></i>
                                    <i className="fab fa-twitter-square fs-2"></i>
                                    <i className="fab fa-whatsapp-square fs-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={doctor2} className="card-img-top p-2" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">David Cooper (Denial)</h5>
                                <p className="card-text green-text fw-bold">Bone Specialist</p>
                                <div className="grey-text d-flex align-items-center justify-content-around">
                                    <i className="fab fa-facebook-square fs-2"></i>
                                    <i className="fab fa-linkedin fs-2"></i>
                                    <i className="fab fa-twitter-square fs-2"></i>
                                    <i className="fab fa-whatsapp-square fs-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={doctor3} className="card-img-top p-2" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Ema Wattson (Rose)</h5>
                                <p className="card-text green-text fw-bold">Eye Specialist</p>
                                <div className="grey-text d-flex align-items-center justify-content-around">
                                    <i className="fab fa-facebook-square fs-2"></i>
                                    <i className="fab fa-linkedin fs-2"></i>
                                    <i className="fab fa-twitter-square fs-2"></i>
                                    <i className="fab fa-whatsapp-square fs-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={doctor4} className="card-img-top p-2" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Michale John Son</h5>
                                <p className="card-text green-text fw-bold">Heart Specialist</p>
                                <div className="grey-text d-flex align-items-center justify-content-around">
                                    <i className="fab fa-facebook-square fs-2"></i>
                                    <i className="fab fa-linkedin fs-2"></i>
                                    <i className="fab fa-twitter-square fs-2"></i>
                                    <i className="fab fa-whatsapp-square fs-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: "#09cc84" }} className="row py-5 mt-5 d-flex align-items-center">
                    <div className="col-md-9 text-white">
                        <h1 className="fw-bolder">Don't waste your time, call: +123-789-9877</h1>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-light fw-medium rounded-pill d-flex align-items-center">Contact Us <i className="fas fa-arrow-alt-circle-right green-text fs-2 ms-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;