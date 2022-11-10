import React from 'react';
import { GiStarGate } from 'react-icons/gi';
import { SlPeople } from 'react-icons/sl';
import { MdDeveloperMode } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscGraphLine } from 'react-icons/vsc';
import { ImHourGlass } from 'react-icons/im';




const Catagory = () => {
    return (
        <div>
            <div className='py-[3rem] px-[3rem] md:py-[4rem] md:px-[6rem] lg:py-[5rem] lg:px-[7.5rem] lg:grid grid-cols-3 gap-[1.5rem]'>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><GiStarGate /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>WORKING HOURS</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><SlPeople /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>OUR HISTORY</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><MdDeveloperMode /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>WEB DEVELOPMENT</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><AiOutlineHeart /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>PERFECT DESIGN</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><VscGraphLine /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>ROUTES AVAILABLE</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><ImHourGlass /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>TAKE A TOUR</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Catagory;