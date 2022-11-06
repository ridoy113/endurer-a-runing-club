import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import testImg from '../assets/h1-parallax-2.jpg'
import { GiCrossMark } from "react-icons/gi";




const Testimonials = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${testImg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">







                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            pagination={true}
                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >

                            <SwiperSlide className="p-[2rem]">
                                <div className="flex justify-center text-[#FA471C] text-4xl md:text-5xl lg:text-6xl mb-[0.5rem] lg:mb-[0.9rem]">
                                    <GiCrossMark />
                                </div>

                                <div>
                                    <h1 className="text-white text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                                    <div className="flex justify-center">
                                        <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                                    </div>
                                    <p className="text-white text-[1.2rem] font-medium tracking-wider mt-[1rem]">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons massa quis eni. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>

                                    <h6 className="text-2xl font-semibold mt-[3rem]">RONY MUNSI</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-[2rem]">
                                <div className="flex justify-center text-[#FA471C] text-4xl md:text-5xl lg:text-6xl mb-[0.5rem] lg:mb-[0.9rem]">
                                    <GiCrossMark />
                                </div>

                                <div>
                                    <h1 className="text-white text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                                    <div className="flex justify-center">
                                        <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                                    </div>
                                    <p className="text-white text-[1.2rem] font-medium tracking-wider mt-[1rem]">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons massa quis eni. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>

                                    <h6 className="text-2xl font-semibold mt-[3rem]">MEHEDI MIRAZ</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-[2rem]">
                                <div className="flex justify-center text-[#FA471C] text-4xl md:text-5xl lg:text-6xl mb-[0.5rem] lg:mb-[0.9rem]">
                                    <GiCrossMark />
                                </div>

                                <div>
                                    <h1 className="text-white text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                                    <div className="flex justify-center">
                                        <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                                    </div>
                                    <p className="text-white text-[1.2rem] font-medium tracking-wider mt-[1rem]">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons massa quis eni. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>

                                    <h6 className="text-2xl font-semibold mt-[3rem]">RONY MUNSI</h6>
                                </div>
                            </SwiperSlide>





                        </Swiper>






                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;