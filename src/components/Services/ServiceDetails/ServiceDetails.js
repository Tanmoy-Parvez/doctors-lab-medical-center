import React from 'react';
import { useParams } from 'react-router-dom'
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useServices();
    const service = services.find(serviceItem => serviceItem.id === parseInt(serviceId))

    const myStyle = {
        textAlign: 'justify',
    }
    return (
        <div className="container marginTop">
            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6 ps-5">
                    <h1>{service?.title}</h1>
                    <h5 style={myStyle}>{service?.details}</h5>
                    <p style={myStyle}>{service?.description}</p>
                    <button className="regular-btn mt-3 d-flex align-items-center">Send Message  <i className="fas fa-arrow-alt-circle-right fs-2 ms-2"></i></button>
                </div>
                <div className="col-md-6 ps-5">
                    <img src={service?.img} alt="" className="w-75" height="300px" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;