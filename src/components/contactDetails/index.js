import React from 'react';

const ContactDetails = ({location, email, phone})=>{
    return(
        <div className="col-lg-10">
            <div className="info-wrap">
                <div className="row">
                <div className="col-lg-4 info">
                    <i className="icofont-google-map" />
                    <h4>Location:</h4>
                    <p>{location}</p>
                </div>
                <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p><a href="mailto:{email}">{email}</a></p>
                </div>
                <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>{phone}</p>
                </div>
                </div>
            </div>

            <br/>
            <p className="text-center">We look forward to hearing from you and remember your estimate will be free. <br/>Mention our website and receive a <strong>10%&nbsp;discount</strong>.</p>
        </div>
    );
};

export default ContactDetails;