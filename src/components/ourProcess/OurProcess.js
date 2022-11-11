import React from 'react';
import Footer from '../shaered/footer/Footer';
import OurProcessBanner from './ourProcessSection/OurProcessBanner';
import OurProcessInfo1 from './ourProcessSection/OurProcessInfo1';
import OurProcessInfo2 from './ourProcessSection/OurProcessInfo2';

const OurProcess = () => {
    return (
        <div>
            <OurProcessBanner />
            <OurProcessInfo1/>
            <OurProcessInfo2/>



            <Footer />
        </div>
    );
};

export default OurProcess;