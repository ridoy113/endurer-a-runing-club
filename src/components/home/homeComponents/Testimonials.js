import React from "react";
import testImg from '../assets/h1-parallax-2.jpg'
import { GiCrossMark } from "react-icons/gi";




const Testimonials = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${testImg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">



                        <div className="flex justify-center text-[#FA471C] text-4xl md:text-5xl lg:text-6xl mb-[0.5rem] lg:mb-[0.9rem]">
                            <GiCrossMark />
                        </div>
                        <div className="carousel w-full">
                            <div id="item1" className="carousel-item w-full">


                                <div>
                                    <h1 className="text-white text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                                    <div className="flex justify-center">
                                        <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                                    </div>
                                    <p className="text-white text-[1.2rem] font-medium tracking-wider mt-[1rem]">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons massa quis eni. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>

                                    <h6 className="text-2xl font-semibold mt-[3rem]">RONY MUNSI</h6>
                                </div>
                            </div>



                            <div id="item2" className="carousel-item w-full">

                                <div>
                                    <h1 className="text-white text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                                    <div className="flex justify-center">
                                        <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                                    </div>
                                    <p className="text-white text-[1.2rem] font-medium tracking-wider mt-[1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore vel illo impedit voluptates expedita voluptate, inventore officia accusamus, fuga est ea distinctio?</p>

                                    <h6 className="text-2xl font-semibold mt-[3rem]">MEHEDI MIRAZ</h6>
                                </div>
                            </div>


                            <div id="item3" className="carousel-item w-full">


                                <div>
                                    <h1 className="text-white text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                                    <div className="flex justify-center">
                                        <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                                    </div>
                                    <p className="text-white text-[1.2rem] font-medium tracking-wider mt-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto natus veritatis, asperiores illo quae placeat officiis itaque fuga quod veniam ratione!</p>

                                    <h6 className="text-2xl font-semibold mt-[3rem]">IFTAKHAR AHMED</h6>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                        </div>






                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;