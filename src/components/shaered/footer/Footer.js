import React from 'react';
import footerLogo from './assets/Logo-1x1-white-1.png';
import footerMap from './assets/footer-map.png';



const Footer = () => {
    return (
        <div>
            <div className='bg-black py-[3rem] lg:py-[5rem] px-[2.5rem] lg:px-[7.5rem] grid grid-cols-1 lg:grid lg:grid-cols-4'>

                <div>
                    <img src={footerLogo} alt="" />
                </div>

                <div>1</div>

                <div>1</div>

                <div>1</div>

            </div>
        </div>
    );
};

export default Footer;