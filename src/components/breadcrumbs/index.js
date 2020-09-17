import React from 'react';

const Breadcrumbs = ({children, title})=>{
    return(
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h2>{title}</h2>
                <ol>
                    {children}
                    <li>{title}</li>
                </ol>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumbs;