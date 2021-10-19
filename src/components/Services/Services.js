import React from 'react';
import { Card, CardGroup, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices(); // use custom hook for data

    // services section
    return (
        <div className="bg-light my-5 py-5">
            <div className="text-center container">
                <h1 className="mb-5">Our <span className="green-text">Services</span> </h1>
                <Row xs={1} md={3} className="g-5">
                    {
                        services.map(service => <CardGroup>
                            <Card className="rounded-3 card-item">
                                <Card.Img variant="top" src={service.img} height="180px" className="w-50 mx-auto p-3" />
                                <Card.Body>
                                    <Card.Title>
                                        <h3>{service.title}</h3>
                                    </Card.Title>
                                    <Card.Text>
                                        {service.details}
                                    </Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/details/${service.id}`}>
                                            <button className="regular-btn d-flex align-items-center ps-3 pe-1 py-1">Details  <i className="fas fa-arrow-alt-circle-right fs-2 ms-2"></i></button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </CardGroup>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Services;