import React from 'react';

//components
import Breadcrumbs from '../components/breadcrumbs';

const Gallery = ({id})=>{
    return(
        <>
            <Breadcrumbs title="Gallery">
                <li><a href="/">Home</a></li>
            </Breadcrumbs>

            <section id="gallery" class="gallery">
                <div class={`elfsight-app-${id}`}></div>
            </section>
        </>
    );
};

export default Gallery;