import React from 'react';

const AppointmentMsg = () => {
    return (
        <div className="banner text-center py-5">
            <div className="container animate__animated animate__bounceIn">
                <h1 className="fw-bold green-text marginTop">Your Appointment Has Been Successfully Placed!</h1>
                <h2 className="my-3 text-secondary">We Will Inform You Very Soon!</h2>
                <span className="fs-1">😊</span>
            </div>

        </div>
    );
};

export default AppointmentMsg;