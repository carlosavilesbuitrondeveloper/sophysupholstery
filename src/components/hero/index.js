import React from 'react';

//components
import HeroSlides from '../heroSlides';


//data
const slides = [
    {
        img : 'url(assets/img/slide/sofa.jpg)',
        title : "Fine Home Upholstery",
        content: "Modern or Classic? We work with any style to achieve your dream look. Make your furniture fit your personality.",
        active: true
    },
    {
        img : 'url(assets/img/slide/sofa02.jpg)',
        title : "Update Your Furniture",
        content: "Do you want to restore or transform your furniture? Give us a call.",
        active: false
    },
    {
        img : 'url(assets/img/slide/interior.jpg)',
        title : "All Vehicles Accepted",
        content: "We will make your vehicle look it's best. Customize your ride with us today.",
        active: false
    }
];

const Hero = ()=>{

    const renderSlider = (items)=>{
        const render = items.map((item, index)=>{
            return(
                <HeroSlides 
                    title={item.title}
                    content={item.content}
                    img={item.img}
                    active={item.active}
                    key={index}
                />
            );
        });

        return render;
    };

    return(
        <section id="hero">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                    {renderSlider(slides)}
                </div>

                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>

                <ol className="carousel-indicators" id="hero-carousel-indicators" />

            </div>
        </section>
    );
};

export default Hero;