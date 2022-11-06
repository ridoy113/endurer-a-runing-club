import React from 'react';
import check1 from '../assets/h1-img-1.jpg';
import check2 from '../assets/h1-img-2.jpg';
import check3 from '../assets/h1-img-3.jpg';
import check4 from '../assets/h1-img-4-550x1100.jpg';




const Check = () => {
    return (
        <div className='py-[3rem] lg:py-[5.5rem] px-[3rem] lg:px-[7.5rem]'>
            <div className='text-center text-4xl font-bold text-black'>
                <p>CHECK OUR WORK</p>
                <div className='flex justify-center'>
                    <p className='h-[0.2rem] w-[7rem] bg-[#FA471C] mt-[0.8rem] mb-[2rem]'></p>
                </div>
            </div>

            <div>
                <div class="grid grid-cols-1 lg:grid lg:grid-cols-4 gap-6 text-center mt-[2rem]">
                    <div class="hover:overflow-hidden">
                        <img className='hover:origin-center hover:rotate-45 ease-in duration-500 cursor-pointer bg-opacity-100' src={check1} alt="" />
                    </div>

                    <div class="lg:row-span-3 lg:col-span-2 hover:overflow-hidden">
                        <img className='hover:origin-center hover:rotate-45 ease-in duration-500 cursor-pointer' src={check3} alt="" />
                    </div>

                    <div class="lg:row-span-3 hover:overflow-hidden">
                        <img className='h-full lg:h-[34.1rem] hover:origin-center hover:rotate-[25deg] ease-in duration-500 cursor-pointer' src={check4} alt="" />
                    </div>

                    <div class="hover:overflow-hidden">
                        <img className='hover:origin-center hover:rotate-45 ease-in duration-500 cursor-pointer' src={check2} alt="" />
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Check;