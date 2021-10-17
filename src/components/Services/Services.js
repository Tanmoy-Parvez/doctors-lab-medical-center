import React from 'react';
import useServices from '../../hooks/useServices'

const Services = () => {
    const [services, setServices] = useServices();
    console.log(services);

    return (
        <div>

        </div>
    );
};

export default Services;