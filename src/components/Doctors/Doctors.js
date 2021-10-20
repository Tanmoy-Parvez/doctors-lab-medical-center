import React from 'react';
import doctor1 from '../../images/doctors-image/doctor-mike.jpg';
import doctor2 from '../../images/doctors-image/doctor-denial.jpg';
import doctor3 from '../../images/doctors-image/doctor-ema.jpg';
import doctor4 from '../../images/doctors-image/john son-6.jpg';
import { Link } from 'react-router-dom';
import "./Doctors.css"

const Doctors = () => {
    // doctors section
    return (
        <div className="text-center marginTop">
            <h1 className="my-5 text-uppercase animate__animated animate__slideInDown">Our Expert <span className="green-text">Doctors</span></h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {/* card-1 */}
                    <div className="col animate__animated animate__slideInUp">
                        <div className="card h-100 doctor-card shadow-lg border-0">
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
                    {/* card-2 */}
                    <div className="col animate__animated animate__slideInUp">
                        <div className="card h-100 doctor-card shadow-lg border-0">
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
                    {/* card-3 */}
                    <div className="col animate__animated animate__slideInUp">
                        <div className="card h-100 doctor-card shadow-lg border-0">
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
                    {/* card-3 */}
                    <div className="col animate__animated animate__slideInUp">
                        <div className="card h-100 doctor-card shadow-lg border-0">
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
            {/* extra info box */}
            <div>
                <div style={{ backgroundColor: "#09cc84" }} className="row py-4 mt-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-9 col-12 text-white">
                        <h1 className="fw-bolder">Don't waste your time, call: +123-789-9877</h1>
                    </div>
                    <div className="col-md-3 col-12 my-2 d-flex align-items-center justify-content-center">
                        <Link to="/contact">
                            <button className="btn btn-light fw-medium rounded-pill d-flex align-items-center">Contact Us <i className="fas fa-arrow-alt-circle-right green-text fs-2 ms-2"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;