import React from 'react';
import './About.css'
import doctors from '../../images/whoweare-img.png'
import { Link } from 'react-router-dom';

const About = () => {
    const myStyle = {
        textAlign: 'justify',
    }
    return (
        <div>
            <h1 className=" text-center">About <span className="green-text">Us</span> </h1>
            <div className="row about-banner pt-5">
                <div className="col-md-6 ps-5">
                    <div className="ps-5">
                        <h3 className="green-text ">
                            Who We Are?
                        </h3>
                        <p className="fs-1">
                            We provide a large <span className="fw-bolder">
                                health-care facility and surgical care.
                            </span>
                        </p>
                        <p style={myStyle} className="text-secondary mt-3">Medical centre means premises that are used for the purpose of providing health services (including preventative care, diagnosis, medical or surgical treatment, counselling or alternative therapies) to out-patients only, where such services are principally provided by health care professionals. It may include the ancillary provision of other health services.</p>
                        <Link to="/contact">
                            <button className="regular-btn mt-3 d-flex align-items-center">Contact Us  <i className="fas fa-arrow-alt-circle-right fs-2 ms-2"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 ps-5">
                    <img src={doctors} className="img-fluid w-75" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;