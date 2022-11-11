import React from 'react';
import teamImg1 from '../assets/p2-img-4.jpg';
import teamImg2 from '../assets/p2-img-5.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';




const AboutUsTeam = () => {
    return (
        <div className='py-[5rem] px-[3rem] md:px-[5rem] lg:px-[8rem]'>

            <div className='text-center'>
                <h1 className='text-4xl text-black font-bold tracking-wide'>THE TEAM</h1>

                <div className='flex justify-center'>
                    <p className='h-[3px] w-[8rem] bg-[#FA471C] my-[1rem] ml-[2px]'></p>
                </div>
            </div>



            <div className='flex-none lg:flex gap-8 mt-[3rem]'>
                <div>
                    <img src={teamImg1} alt="" />

                    <div className='text-center mt-[3rem] pb-[2rem]'>
                        <h1 className='text-3xl font-bold text-[#FA471C]'>VINCENT RUSSELL</h1>

                        <p className='mt-[0.7rem] tracking-wider leading-6'>Quam felis ultricies nec, pellentesque eu, pretium quis sem. Nulla tellus consequat et sit amet nibhassa quis enim. Donec pede in justo, fringilla vel aliquet nec et eget arcu. In enim justo rhoncus.</p>

                        <div className='flex justify-center text-black hover:text-[#F9461B] cursor-pointer ease-in duration-300 mt-[1.3rem] '>
                            <h4 className='font-bold tracking-wider mr-[0.3rem] hover:mr-[0.6rem] ease-in duration-300'>VIEW MORE</h4>
                            <p className='text-2xl'><AiOutlineArrowRight /></p>
                        </div>

                    </div>





                </div>





                <div>
                    <img src={teamImg2} alt="" />

                    <div className='text-center mt-[3rem] pb-[2rem]'>
                        <h1 className='text-3xl font-bold text-[#FA471C]'>TERESA WAGNER</h1>

                        <p className='mt-[0.7rem] tracking-wider leading-6'>Quam felis ultricies nec, pellentesque eu, pretium quis sem. Nulla tellus consequat et sit amet nibhassa quis enim. Donec pede in justo, fringilla vel aliquet nec et eget arcu. In enim justo rhoncus.</p>

                        <div className='flex justify-center text-black hover:text-[#F9461B] cursor-pointer ease-in duration-300 mt-[1.3rem] '>
                            <h4 className='font-bold tracking-wider mr-[0.3rem] hover:mr-[0.6rem] ease-in duration-300'>VIEW MORE</h4>
                            <p className='text-2xl'><AiOutlineArrowRight /></p>
                        </div>

                    </div>





                </div>
            </div>


        </div>
    );
};

export default AboutUsTeam;