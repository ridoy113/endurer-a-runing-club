import React from 'react';
import Footer from '../shaered/footer/Footer';
import AboutUsBanner from './aboutUsSection/AboutUsBanner';
import AboutUsSlider from './aboutUsSection/AboutUsSlider';

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner />
            <AboutUsSlider/>

            <Footer />
        </div>
    );
};

export default AboutUs;