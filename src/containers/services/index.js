import React from 'react';

//icons
import { GiFamilyHouse } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { AiFillCar } from "react-icons/ai";

//components
import Service from '../../components/service';

//services data
const data_services = [
    {
        icon: ()=>{
            return(<GiFamilyHouse/>)
        },
        title: 'Home',
        description: 'We fix, repair, update, customize any type of home furniture. No challenge is too big. Chairs, sofas, tables, and more.'
    },
    {
        icon: ()=>{
            return(<IoMdBusiness />)
        },
        title: 'Commercial',
        description: 'We create booths, seats, panels, and can work with all kinds of businesses. We can meet the needs of your business/location.'
    },
    {
        icon: ()=>{
            return(<AiFillCar />)
        },
        title: 'Automobile',
        description: 'Let us create great seats and more for your vehicle. We\'ll fit your style to make your ride suit your needs.'
    }
];

const Services = ()=>{

    const renderServices = (items)=>{
        const render = items.map((item, index)=>{
            return(
                <Service key={index} icon={item.icon} title={item.title} description={item.description} />
            );
        });

        return render;
    };

    return(
        <section id="services" className="services">
            <div className="container">
                <div className="section-title aos-init aos-animate" data-aos="fade-up">
                <h2>Our Services</h2>
                </div>
                <div className="row">
                    {renderServices(data_services)}
                </div>
            </div>
        </section>
    );
};

export default Services;