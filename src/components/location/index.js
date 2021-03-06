import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342426.4692235221!2d-90.52424163852656!3d30.621835032398103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8627112683ebedb3%3A0xfa305e6ea1979981!2sHammond%2C+LA%2C+LA!5e0!3m2!1sen!2sus!4v1554182186639!5m2!1sen!2sus"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;