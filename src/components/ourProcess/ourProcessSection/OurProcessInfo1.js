import React from 'react';
import infoimg1 from '../assets/p4-img-1.jpg'


const OurProcessInfo1 = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid lg:grid-cols-2'>
                <div>
                    <img src={infoimg1} alt="" />
                </div>




                <div className='px-[6rem] py-[5rem] text-end'>
                    <h1 className='text-4xl font-bold text-black tracking-wide'>EASY BEGINNINGS</h1>


                    <div className='flex justify-end'>
                        <p className='h-[3px] w-[7rem] bg-[#FA471C] my-[0.8rem]'></p>
                    </div>


                    <p className='tracking-wide leading-6 text-black mt-[1rem] mb-[1.5rem]'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, aenean massa. Cum sociis theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus aliquam.
                    </p>



                    <button className='border-solid border-[1px] border-[#FA471C] w-[8.4rem] h-[3rem]  hover:w-[8.7rem] hover:h-[3.5rem] ease-in-out duration-300'>

                        <button className='w-[8rem] h-[2.7rem] bg-[#FA471C] text-white font-bold'>BROWSE</button>
                    </button>


                </div>

            </div>
        </div>
    );
};

export default OurProcessInfo1;