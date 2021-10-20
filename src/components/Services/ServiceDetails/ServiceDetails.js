import React from 'react';
import { Link, useParams } from 'react-router-dom'
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    // find the specific service component
    const [services, setServices] = useServices();
    const service = services.find(serviceItem => serviceItem.id === parseInt(serviceId));

    // custom style
    const myStyle = {
        textAlign: 'justify',
    }
    // service details section
    return (
        <div className="container marginTop animate__animated animate__slideInRight">
            <div className="row d-flex align-items-center my-5 bg-light shadow-lg py-5">
                <div className="col-md-6 col-12 px-5 mb-5">
                    <h1>{service?.title}</h1>
                    <h5 className="fw-bold">{service?.details}</h5>
                    <p style={myStyle}>{service?.description}</p>
                    <Link to={"/appointment"}>
                        <button className="regular-btn mt-3 d-flex align-items-center">Appointment  <i className="fas fa-arrow-alt-circle-right fs-2 ms-2"></i></button>
                    </Link>
                </div>
                <div className="col-md-6 col-12 ps-5">
                    <img src={service?.img} alt="" className="w-75" height="300px" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;