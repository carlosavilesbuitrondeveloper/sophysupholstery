import React from 'react';

//components
import Breadcrumbs from '../components/breadcrumbs';
import AddressMap from '../components/addressMap';
import ContactDetails from '../components/contactDetails';

//assets
import storeFront from "../assets/storefront.jpg"

const Contact = ()=>{
    return(
        <>
            <Breadcrumbs title="Contact">
                <li><a href="/">Home</a></li>
            </Breadcrumbs>

            <AddressMap map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6985.552646415253!2d-73.814635!3d40.788861000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28a94e8c057e7%3A0x3e9d3f543fe88df5!2s149-43%2014th%20Ave%2C%20Flushing%2C%20NY%2011357!5e1!3m2!1sen!2sus!4v1600051153401!5m2!1sen!2sus" />

            <section id="contact" class="contact">
                <div className="container">
                    <div class="row justify-content-center" data-aos="fade-up">
                        
                        <ContactDetails 
                            location={"149-43 14th. Avenue., Whitestone, NY"}
                            phone={"718-898-2984"}
                            email={"MOVM35@hotmail.com"}
                        />

                    </div>

                    <div className="col-lg-12">
                        <img className="img-fluid" alt="store front" src={storeFront} />
                    </ div>

                </div>
            </section>
        </>
    );
};

export default Contact;