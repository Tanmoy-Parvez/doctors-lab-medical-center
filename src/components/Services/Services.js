import React from 'react';
import { Card, CardGroup, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div className="my-5 text-center">
            <h1 className="my-5">Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={service.img} height="220px" className="w-50 mx-auto" />
                            <Card.Body>
                                <Card.Title>
                                    <h3>{service.title}</h3>
                                </Card.Title>
                                <Card.Text>
                                    {service.details}
                                </Card.Text>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/details/${service.id}`}>
                                        <button className="regular-btn d-flex align-items-center">Details  <i className="fas fa-arrow-alt-circle-right fs-2 ms-2"></i></button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>)
                }
            </Row>

        </div>
    );
};

export default Services;