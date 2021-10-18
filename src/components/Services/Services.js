import React from 'react';
import { Card, CardGroup, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices'

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div className="my-5 text-center">
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
                                <Link to={`/details/${service.id}`}>
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>)
                }
            </Row>

        </div>
    );
};

export default Services;