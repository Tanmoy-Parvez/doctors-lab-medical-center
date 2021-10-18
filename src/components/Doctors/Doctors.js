import React from 'react';
import doctor1 from '../../images/doctors-image/doctor-mike.jpg';
import doctor2 from '../../images/doctors-image/doctor-denial.jpg';
import doctor3 from '../../images/doctors-image/doctor-ema.jpg';
import doctor4 from '../../images/doctors-image/john son-6.jpg';

const Doctors = () => {
    return (
        <div className="container my-5 text-center">
            <h1 className="my-5">Our Expert <span className="green-text">Doctors</span> </h1>
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
    );
};

export default Doctors;