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
            <div className='py-[6rem] px-[3rem] lg:px-[8rem]'>

                <div className='text-center text-2xl md:text-3xl lg:text-5xl font-bold text-[#1B1A18]'>
                    OUR ALL PORTFOLIO FOR CONSUMER
                </div>
                <div className='flex justify-center'>
                    <p className='h-[3px] w-[10rem] lg:h-[4px] lg:w-[25rem] bg-[#FA471C] my-[1rem]'></p>
                </div>







                <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 py-[4rem] gap-8'>

                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg1} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            RIGHT WAY
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - RECREATION
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg2} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            TRAINING
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - RECREATION
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg3} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            FREE RUN
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - RECREATION
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg4} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            RECREATION
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - RUNNING
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg5} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            BEGINNING
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - RUNNING
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg6} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            BEST TEAM
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - RUNNING
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg7} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            STRENGTH
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - SPORT
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg8} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            BE STRONGER
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - SPORT
                        </p>
                    </div>
                    <div className='cursor-pointer pb-[4rem]'>
                        <img className='h-full w-full' src={infoImg9} alt="" />
                        <h1 className='text-2xl text-black font-bold mt-[1rem]'>
                            RIGHT STAMINA
                        </h1>

                        <p className='text-zinc-400 font-semibold mt-[0.5rem] hover:text-[#FA471C] ease-in duration-300 '>
                            RACE - SPORT
                        </p>
                    </div>






                </div>




            </div>


        </div>
    );
};

export default PortfolioInfo;