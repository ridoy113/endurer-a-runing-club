import React from 'react';
import difImg from '../assets/h1-img-5.jpg'



const Difference = () => {
    return (
        <div>
            <div className='bg-[#F2F1F1] py-[3rem] px-[3rem] md:[4rem] md:px-[6rem] lg:py-[5rem] lg:px-[7.5rem] md:grid grid-cols-3 lg:grid grid-cols-3 gap-[1.5rem]'>
                <div className='grid content-center'>
                    <h1>MAKE A DIFFERENCE.</h1>
                    <h6></h6>
                    <p>Lorem ipsum dolor sit amet, adipiscing elit, consect adipiscing elit. Duis ut ligula leo eti. Aliquam suscip sed purus. Lorem ipsum dolor, consectetur dolor sit ut ligula leo. Aliquam suscip.</p>
                </div>
                <div className='md:col-span-2 lg:col-span-2'>
                    <img src={difImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Difference;