import React from 'react';
import pocessBanImg from '../assets/p4-title-img-1.jpg';


const OurProcessBanner = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${pocessBanImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl lg:text-7xl font-bold">OUR PROCESS</h1>

                        <div className='flex justify-center'>
                            <p className='h-[6px] w-[10rem] lg:h-[6px] lg:w-[18rem] bg-white my-[1.5rem] lg:my-[1.8rem]'></p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurProcessBanner;