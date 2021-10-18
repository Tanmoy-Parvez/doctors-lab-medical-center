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
        <div className="container">
            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6 ps-5">
                    <h1>{service?.title}</h1>
                    <h5 style={myStyle}>{service?.details}</h5>
                    <p style={myStyle}>{service?.description}</p>
                    <button className="btn btn-danger mt-2 rounded-pill px-3">
                        Appointment
                    </button>
                </div>
                <div className="col-md-6 ps-5">
                    <img src={service?.img} alt="" className="w-75" height="300px" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;