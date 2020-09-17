import React from 'react';
import {NavLink} from 'react-router-dom';

const CTA = ()=>{
    return(
    <section id="cta" className="cta">
        <div className="container">

            <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                <h3>We have over 25 years of experience.</h3>
                <p>Here we specialize in all types of furniture upholstery and restoration. We service all residental and commerical needs. All estimates are 100% free. If you are looking for beautiful custom made slipcovers, then you have come to the right place. We are also experts on wood restoration.</p>
                </div>
                    <div className="col-lg-3 cta-btn-container text-center">
                    <NavLink className="cta-btn align-middle" to="/contact">Request a quote</NavLink>
                </div>
            </div>

        </div>
    </section>);
};

export default CTA;