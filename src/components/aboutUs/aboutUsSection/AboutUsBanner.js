import React from 'react';
import aboutUsBannImg from '../assets/p1-title-img-1.jpg'



const AboutUsBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${aboutUsBannImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl lg:text-7xl font-bold">ABOUT US</h1>

                        <div className='flex justify-center'>
                            <p className='h-[6px] w-[10rem] lg:h-[6px] lg:w-[18rem] bg-white my-[1.5rem] lg:my-[1.8rem]'></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;