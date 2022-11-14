import React from "react";
import { GiCrossMark } from "react-icons/gi";
import img1 from '../assets/port-1-img-4.jpg';
import img2 from '../assets/port-1-img-5.jpg';
import img3 from '../assets/port-1-img-8.jpg';




const Testimonials = () => {
    return (
        <div className="bg-[#F2F1F1] pt-[3rem]">
            <div className="pb-[3rem] px-[3rem] lg:pb-[5rem] lg:px-[7rem]">
                <div className="carousel w-full">



                    <div id="item1" className="carousel-item w-full">
                        <div className="text-center">
                            <h1 className="text-black text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                            <div className="flex justify-center">
                                <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                            </div>

                            <div className="flex justify-center">
                                <img className="h-[21rem] w-[23rem] my-[2rem]" src={img1} alt="" />
                            </div>


                            <p className="text-zinc-600 text-[1.2rem] font-medium tracking-wide px-[0rem] lg:px-[9rem]">Donec quam felis, ultricies nec, pellentesque eu, pretium br quis, sem. Nulla cons massa quis eni. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>

                            <h6 className="text-2xl text-[#FA471C] font-semibold mt-[1rem] mb-[2rem]">RONY MUNSI</h6>
                        </div>
                    </div>





                    <div id="item2" className="carousel-item w-full">
                        <div className="text-center">
                            <h1 className="text-black text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                            <div className="flex justify-center">
                                <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                            </div>

                            <div className="flex justify-center">
                                <img className="h-[21rem] w-[23rem] my-[2rem]" src={img2} alt="" />
                            </div>


                            <p className="text-zinc-600 text-[1.2rem] font-medium tracking-wide px-[0rem] lg:px-[9rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla enim vel natus, nemo quaerat molestias quidem, deserunt quas aliquid repellendus hic quos? Odio, eveniet?</p>

                            <h6 className="text-2xl text-[#FA471C] font-semibold mt-[1rem] mb-[2rem]">IFTAKHAR AHMEDA</h6>
                        </div>
                    </div>




                    <div id="item3" className="carousel-item w-full">
                        <div className="text-center">
                            <h1 className="text-black text-[2rem] lg:text-[2.8rem] font-bold">TESTIMONIALS.</h1>
                            <div className="flex justify-center">
                                <p className="bg-[#FA471C] h-[0.2rem] w-[5rem] mt-[0.3rem] mb-[0.5rem] lg:mb-[0.9rem]"></p>
                            </div>

                            <div className="flex justify-center">
                                <img className="h-[21rem] w-[23rem] my-[2rem]" src={img3} alt="" />
                            </div>


                            <p className="text-zinc-600 text-[1.2rem] font-medium tracking-wide px-[0rem] lg:px-[9rem]">Dolor sit amet consectetur adipisicing elit. Modi inventore earum sint minima. Vitae enim cum, excepturi eos accusamus ratione recusandae eveniet tempore quae dolorem, a quasi quos.</p>

                            <h6 className="text-2xl text-[#FA471C] font-semibold mt-[1rem] mb-[2rem]">AURMI AKTERR</h6>
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
    );
};

export default Testimonials;