import React from 'react';
import contactBannImg from '../assets/p3-title-img-1.jpg';



const ContactUsBanner = () => {
    return (
        <div>



            <div className="hero h-[40vh] lg:h-[60vh] bg-fixed" style={{ backgroundImage: `url(${contactBannImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl lg:text-7xl font-bold">CONTACT US</h1>

                        <div className='flex justify-center'>
                            <p className='h-[6px] w-[10rem] lg:h-[6px] lg:w-[18rem] bg-white my-[1rem]'></p>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default ContactUsBanner;