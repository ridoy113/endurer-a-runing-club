import React from 'react';
import Footer from '../shaered/footer/Footer';
import AboutUsBanner from './aboutUsSection/AboutUsBanner';
import AboutUsDeffrance from './aboutUsSection/AboutUsDeffrance';
import AboutUsSlider from './aboutUsSection/AboutUsSlider';
import AboutUsTeam from './aboutUsSection/AboutUsTeam';

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner />
            <AboutUsSlider/>
            <AboutUsDeffrance/>
            <AboutUsTeam/>

            <Footer />
        </div>
    );
};

export default AboutUs;