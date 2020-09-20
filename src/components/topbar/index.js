import React from 'react';

const TopBar = ()=>{
    return(
    <section id="topbar" className="d-lg-block">
        <div className="container d-flex">
            <div className="contact-info mr-auto">
                <i className="icofont-envelope" /><a href="mailto:MOVM35@hotmail.com">MOVM35@hotmail.com</a>
                <i className="icofont-phone" /> 718-898-2984
            </div>
        </div>
    </section>);
};

export default TopBar;