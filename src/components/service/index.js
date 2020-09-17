import React from 'react';

const Service = ({icon, title, description})=>{
    return(
        <div className="col-lg-4 col-md-6">
                <div className="icon-box aos-init aos-animate" data-aos="fade-up">
                <div className="icon icon-custom">{icon()}</div>
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default Service;