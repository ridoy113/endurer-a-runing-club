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
            <div className='py-[3rem] px-[3rem] md:[4rem] md:px-[6rem] lg:py-[5rem] lg:px-[7.5rem] lg:grid grid-cols-3 gap-[1.5rem]'>

                <div className='flex py-[2.5rem]'>
                    <p className='text-5xl mr-[1rem] mt-[-0.5rem] text-zinc-400 hover:text-[#f9471c] ease-in duration-300 cursor-pointer	'><GiStarGate /></p>
                    <div>
                        <h3 className='text-[1.4rem] font-bold text-black pb-[0.7rem] hover:text-[#f9471c] ease-in duration-300 cursor-pointer'>WORKING HOURS</h3>
                        <p className='tracking-wider'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean com ligula eget.</p>
                    </div>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    );
};

export default Catagory;