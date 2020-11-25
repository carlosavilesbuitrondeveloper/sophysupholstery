import React from 'react';


//components
import CTA from '../components/cta';
import Hero from '../components/hero';

//containers
import Portfolio from '../containers/portfolio';
import Services from '../containers/services';

const Home = ({id})=>{
    return(
    <>
        <Hero />
        <CTA />
        <Services />
        <Portfolio id={id} />
    </>);
};

export default Home;