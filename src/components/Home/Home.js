import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    // home section that contain other components
    return (
        <div>
            <Banner />
            <Services />
            <Gallery />
            <About />
        </div>
    );
};

export default Home;