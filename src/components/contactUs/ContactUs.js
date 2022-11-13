import React from 'react';
import Footer from '../shaered/footer/Footer';
import ContactUsBanner from './contactUsSection/ContactUsBanner';
import ContactUsInfo from './contactUsSection/ContactUsInfo';

const ContactUs = () => {
    return (
        <div>
            <ContactUsBanner />
            <ContactUsInfo/>



            <Footer />
        </div>
    );
};

export default ContactUs;