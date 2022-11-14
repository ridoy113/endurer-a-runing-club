import React from 'react';
import infoImg1 from '../assets/port-1-img-1.jpg';
import infoImg2 from '../assets/port-1-img-2.jpg';
import infoImg3 from '../assets/port-1-img-3.jpg';
import infoImg4 from '../assets/port-1-img-4.jpg';
import infoImg5 from '../assets/port-1-img-5.jpg';
import infoImg6 from '../assets/port-1-img-6.jpg';
import infoImg7 from '../assets/port-1-img-7.jpg';
import infoImg8 from '../assets/port-1-img-8.jpg';
import infoImg9 from '../assets/port-1-img-12.jpg';





const PortfolioInfo = () => {
    return (
        <div>
            <div className='my-[6rem] px-[3rem] md:px-[5rem] lg:px-[8rem]'>

                <div className='text-center text-2xl md:text-3xl lg:text-5xl font-bold text-[#1B1A18]'>
                    OUR ALL PORTFOLIO FOR CONSUMER
                </div>
                <div className='flex justify-center'>
                    <p className='h-[3px] w-[10rem] lg:h-[4px] lg:w-[25rem] bg-[#FA471C] my-[1rem]'></p>
                </div>





                <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 my-[4rem] gap-10'>

                    <div className='cursor-pointer'>
                        <img className='h-full w-full' src={infoImg1} alt="" />

                        <div className='mt-[1.5rem]'>
                            <h1 className='text-2xl text-black font-bold'>RIGHT WAY</h1>

                            <p className='text-zinc-400 font-bold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>RACE - RECREATION</p>
                        </div>
                    </div>





                    
                </div>




            </div>


        </div>
    );
};

export default PortfolioInfo;