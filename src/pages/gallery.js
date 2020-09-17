import React from 'react';

//components
import Breadcrumbs from '../components/breadcrumbs';

const Gallery = ()=>{
    return(
        <>
            <Breadcrumbs title="Gallery">
                <li><a href="/">Home</a></li>
            </Breadcrumbs>

            <section id="gallery" class="gallery">
                <div class="elfsight-app-52a113bb-808f-48af-adc8-9a1fe6a112c7"></div>
            </section>
        </>
    );
};

export default Gallery;