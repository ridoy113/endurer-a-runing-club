import React from 'react';
import { BsPeople, BsHeart, BsGraphUp } from 'react-icons/bs';
import { GiSandsOfTime } from 'react-icons/gi';



const AboutUsDeffrance = () => {
    return (
        <div>

            <div className='pb-[8rem] px-[3rem] md:px-[5rem] lg:px-[8rem]  bg-[#F2F1F1] grid grid-cols-1 lg:grid lg:grid-cols-3 gap-12'>

                <div className='row-span-3 '>
                    <h1 className='text-4xl text-black font-bold tracking-wide'>MAKE A DIFFERENCE</h1>

                    <div className=''>
                        <p className='h-[3px] w-[8rem] bg-[#FA471C] my-[1rem] ml-[2px]'></p>
                    </div>

                    <p className='pt-[0.8rem] text-base	tracking-wide'>
                        Aenean imperdiet, etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus, maecenas tempus, tellus eget rhoncus sodales sagittis magna leo.
                    </p>

                </div>

                <div className='flex'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><BsPeople /></p>
                    <div>
                        <h3 className='text-[1.3rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>OUR HISTORY</h3>
                        <p className='tracking-wide'>Maecenas tempus, tellus eget nam condimentum. Rhoncus blandit quam.</p>
                    </div>
                </div>

                <div className='flex'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><BsHeart /></p>
                    <div>
                        <h3 className='text-[1.3rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>WEB DEVELOPMENT</h3>
                        <p className='tracking-wide'>Venenatis faucibus, nullam quis ante. Etiam sit amet orci eget montes.</p>
                    </div>
                </div>

                <div className='flex'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><BsGraphUp /></p>
                    <div>
                        <h3 className='text-[1.3rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>ROUTES AVAILABLE</h3>
                        <p className='tracking-wide'>Nam quam nunc, blandit vel. Luctus pulvinar, hendrerit id maecenas.</p>
                    </div>
                </div>

                <div className='flex'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><GiSandsOfTime /></p>
                    <div>
                        <h3 className='text-[1.3rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>TAKE A TOUR</h3>
                        <p className='tracking-wide'>Sed consequat, leo bibendum sodales, augue velit cursus libero.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AboutUsDeffrance;