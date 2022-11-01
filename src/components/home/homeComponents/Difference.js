import React from 'react';
import difImg from '../assets/h1-img-5.jpg'
import textbgImg from '../assets/titlebackground-image-2.png'



const Difference = () => {
    return (
        <div>
            <div className='bg-[#F2F1F1] py-[3rem] px-[3rem] md:[4rem] md:px-[6rem] lg:py-[5rem] lg:px-[7.5rem] lg:grid grid-cols-3 gap-[1.5rem]'>
                <div className='grid content-center pb-[3.5rem]'>


                    <div>
                        <h1 className='text-[2.8rem] font-bold text-black leading-[3rem]'>MAKE A DIFFERENCE.</h1>
                    </div>


                    <h6 className='h-[0.2rem] w-[6rem] bg-[#f9471c] my-[1.5rem]'></h6>

                    <p className='tracking-wide text-black'>Lorem ipsum dolor sit amet, adipiscing elit, consect adipiscing elit. Duis ut ligula leo eti. Aliquam suscip sed purus. Lorem ipsum dolor, consectetur dolor sit ut ligula leo. Aliquam suscip.</p>
                </div>
                <div className='lg:col-span-2'>
                    <img src={difImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Difference;