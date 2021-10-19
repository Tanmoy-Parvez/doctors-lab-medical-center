import React from 'react';
import img1 from '../../images/gallery/pic1.jpg'
import img2 from '../../images/gallery/pic2.jpg'
import img3 from '../../images/gallery/pic3.jpg'
import img4 from '../../images/gallery/pic4.jpg'

const Gallery = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="mb-5">Our <span className="green-text">Gallery</span> </h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={img1} className="card-img-top" alt="..." />
                        <p className="text-secondary my-1">Date:12/12/2012 9.00 Am</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img2} className="card-img-top" alt="..." />
                        <p className="text-secondary my-1">Date:01/01/2014 10.00 Am</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img3} className="card-img-top" height="170px" alt="..." />
                        <p className="text-secondary my-1">Date:29/02/2016 11.00 Am</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img4} className="card-img-top" height="168px" alt="..." />
                        <p className="text-secondary my-1">Date:10/10/2020 12.00 Pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;