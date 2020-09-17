import React from 'react';
import {NavLink} from 'react-router-dom';

//components
import Breadcrumbs from '../components/breadcrumbs';

const About = ()=>{
    return(
    <>
        <Breadcrumbs title="About">
            <li><a href="/">Home</a></li>
        </Breadcrumbs>

        <section id="about-us" class="about-us">
            <div class="container">
                <div class="row no-gutters">

                    <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right"></div>

                    <div class="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                        <div class="content d-flex flex-column justify-content-center">
                            <h3 data-aos="fade-up">Family Owned, Second Generation</h3>
                            <br/>
                            <p data-aos="fade-up" className="details">
                                Sophy's Upholstery has been in business for over 25 years providing quality upholstery, antique repair, and other services for the New York City area. We have an outstanding record of fine service and great customer care.
                            </p>

                            <p data-aos="fade-up" className="details">
                                We stand by our work 100%. Come to us and you can be assured that your project will be in good hands. You will receive the best price for quality work. Sophy’s employs only professionals with years of experience in upholstery, wood finishing, and slip cover creation.
                            </p>

                            <p data-aos="fade-up" className="details">
                                Special Web Only Offer: Mention Our Website and <strong>Get 10%</strong> discount on your project.
                            </p>

                            <p data-aos="fade-up" className="details">
                                Contact us to have a free estimate done for you on site.
                            </p>

                            <div className="cta">
                                <div className="cta-btn-container text-center centerd-cta">
                                    <NavLink className="cta-btn align-middle" to="/contact">Request a quote</NavLink>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>);
};

export default About;