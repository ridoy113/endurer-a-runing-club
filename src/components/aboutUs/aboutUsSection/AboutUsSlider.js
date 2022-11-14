import React from 'react';
import slideImg1 from '../assets/28430454_163583734295596_1733570597348179968_n.jpg';
import slideImg2 from '../assets/p2-img-1.jpg';
import slideImg3 from '../assets/p2-img-3.jpg';



const AboutUsSlider = () => {
    return (
        <div>
            <div className='py-[8rem] px-[3rem] md:px-[5rem] lg:px-[8rem]  bg-[#F2F1F1]'>




                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slideImg1} className="h-100% w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="text-3xl lg:text-7xl font-bold text-[#FA471C]">❮</a>
                            <a href="#slide2" className="text-3xl lg:text-7xl font-bold text-[#FA471C]">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slideImg2} className="h-100% w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="text-3xl lg:text-7xl font-bold text-[#FA471C]">❮</a>
                            <a href="#slide3" className="text-3xl lg:text-7xl font-bold text-[#FA471C]">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slideImg3} className="h-100% w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="text-3xl lg:text-7xl font-bold text-[#FA471C]">❮</a>
                            <a href="#slide4" className="text-3xl lg:text-7xl font-bold text-[#FA471C]">❯</a>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
};

export default AboutUsSlider;