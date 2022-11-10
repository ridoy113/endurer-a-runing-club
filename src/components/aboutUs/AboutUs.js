import React from 'react';
import Footer from '../shaered/footer/Footer';
import AboutUsBanner from './aboutUsSection/AboutUsBanner';
import AboutUsDeffrance from './aboutUsSection/AboutUsDeffrance';
import AboutUsSlider from './aboutUsSection/AboutUsSlider';

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner />
            <AboutUsSlider/>
            <AboutUsDeffrance/>

            <Footer />
        </div>
    );
};

export default AboutUs;