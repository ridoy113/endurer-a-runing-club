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
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${testImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
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

                            <SwiperSlide>
                                <div className="flex justify-center text-[#FA471C]">
                                    <GiCrossMark />
                                </div>
                                <div>
                                    <h1>TESTIMONIALS.</h1>
                                    <div><p></p></div>
                                    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons massa quis eni. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                    <h6>RONY MUNSI</h6>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <h1>2</h1>
                            </SwiperSlide>


                            <SwiperSlide>
                                <h1>3</h1>
                            </SwiperSlide>


                        </Swiper>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;