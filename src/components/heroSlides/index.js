import React from 'react';

const HeroSlides = ({img, title, content, active})=>{
    return(
        <div className={`carousel-item ${active ? 'active' : ''}`} style={{backgroundImage: `${img}`}}>
            <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                <h2>{title}</h2>
                <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSlides;