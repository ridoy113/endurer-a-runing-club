import React from 'react';
import infoimg3 from '../assets/p4-img-3.jpg'


const OurProcessInfo3 = () => {
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid lg:grid-cols-2'>
                <div>
                    <img className='w-full h-full' src={infoimg3} alt="" />
                </div>




                <div className='px-[6rem] py-[5rem] text-end'>
                    <h1 className='text-4xl font-bold text-black tracking-wide'>PROFESSIONAL APPROACH
                    </h1>


                    <div className='flex justify-end'>
                        <p className='h-[3px] w-[7rem] bg-[#FA471C] my-[0.8rem]'></p>
                    </div>


                    <p className='tracking-wide leading-6 text-black mt-[1rem] mb-[1.5rem]'>
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt.


                    </p>


                </div>

            </div>

        </div>
    );
};

export default OurProcessInfo3;