import React from 'react';


const Portfolio = ({id}) =>{
    return(
    <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="section-title">
                <h2>Some of our <strong>recent projects</strong></h2>
            </div>

            <div class={`elfsight-app-${id}`}></div>

        </div>
    </section>
    );
};

export default Portfolio;