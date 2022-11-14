import './homeHeader.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import hImg1 from '../assets/h1-slider-1-background-img.jpg'
import hImg2 from '../assets/h1-slider-2-background-img.jpg'
import hImg3 from '../assets/h1-slider-3-background-img.jpg'




const HomeHeader = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <SwiperSlide>
                    <div className=" hero min-h-screen" style={{ backgroundImage: `url(${hImg1})` }}>
                        <div className="text text-center">
                            <h1 className='text-[30px] lg:text-[90px] font-bold text-white leading-[2rem] lg:leading-[5.4rem]'>
                                LACE UP AND
                                <div className="text-[#FA471C]">
                                    DON'T
                                </div>
                                STOP.</h1>
                            <div className='flex justify-center'>
                                <p className='h-[6px] w-[10rem] lg:h-[6px] lg:w-[18rem] bg-white my-[1.8rem]'></p>
                            </div>
                            <button className='border-solid border-[1px] border-white w-[10.5rem] h-[3rem] lg:w-[12rem] lg:h-[3.5rem] hover:w-[11rem] hover:h-[3.2rem] hover:lg:w-[12.5rem] hover:lg:h-[4rem] ease-in-out duration-300'>
                                <button className='w-[9.9rem] h-[2.4rem] lg:w-[11.5rem] lg:h-[3rem] bg-white text-black font-bold'>BUY THEME</button>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=" hero min-h-screen" style={{ backgroundImage: `url(${hImg2})` }}>
                        <div className="text text-center">
                            <h1 className='text-[30px] lg:text-[90px] font-bold text-white leading-[2rem] lg:leading-[5.4rem]'>
                                WE
                                <div className="text-[#FA471C]">
                                    RUN
                                </div>
                                WE BECOME.</h1>
                            <div className='flex justify-center'>
                                <p className='h-[6px] w-[10rem] lg:h-[6px] lg:w-[18rem] bg-white my-[1.8rem]'></p>
                            </div>
                            <button className='border-solid border-[1px] border-white w-[10.5rem] h-[3rem] lg:w-[12rem] lg:h-[3.5rem] hover:w-[11rem] hover:h-[3.2rem] hover:lg:w-[12.5rem] hover:lg:h-[4rem] ease-in-out duration-300'>
                                <button className='w-[9.9rem] h-[2.4rem] lg:w-[11.5rem] lg:h-[3rem] bg-white text-black font-bold'>BUY THEME</button>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=" hero min-h-screen" style={{ backgroundImage: `url(${hImg3})` }}>
                        <div className="text text-center">
                            <h1 className='text-[30px] lg:text-[90px] font-bold text-white leading-[2rem] lg:leading-[5.4rem]'>
                                COUNQUER
                                <div className="text-[#FA471C]">
                                    ANY
                                </div>
                                TERRAIN.</h1>
                            <div className='flex justify-center'>
                                <p className='h-[6px] w-[10rem] lg:h-[6px] lg:w-[18rem] bg-white my-[1.8rem]'></p>
                            </div>
                            <button className='border-solid border-[1px] border-white w-[10.5rem] h-[3rem] lg:w-[12rem] lg:h-[3.5rem] hover:w-[11rem] hover:h-[3.2rem] hover:lg:w-[12.5rem] hover:lg:h-[4rem] ease-in-out duration-300'>
                                <button className='w-[9.9rem] h-[2.4rem] lg:w-[11.5rem] lg:h-[3rem] bg-white text-black font-bold'>BUY THEME</button>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeHeader;