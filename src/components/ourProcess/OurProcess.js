import React from 'react';
import Footer from '../shaered/footer/Footer';
import OurProcessBanner from './ourProcessSection/OurProcessBanner';
import OurProcessInfo1 from './ourProcessSection/OurProcessInfo1';
import OurProcessInfo2 from './ourProcessSection/OurProcessInfo2';
import OurProcessInfo3 from './ourProcessSection/OurProcessInfo3';

const OurProcess = () => {
    return (
        <div>
            <OurProcessBanner />
            <OurProcessInfo1/>
            <OurProcessInfo2/>
            <OurProcessInfo3/>



            <Footer />
        </div>
    );
};

export default OurProcess;