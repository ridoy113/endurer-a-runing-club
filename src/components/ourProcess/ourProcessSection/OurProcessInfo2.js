import React from 'react';
import infoimg2 from '../assets/p4-img-2.jpg'


const OurProcessInfo2 = () => {
    return (
        <div>


            <div className='grid grid-cols-1 lg:grid lg:grid-cols-2'>


                <div className='px-[5rem] py-[3rem]  lg:py-[6.5rem]'>

                    <div>
                        <div className='flex justify-between'>
                            <h1 className='text-[1.1rem] font-bold text-[#FA471C]'>SPORT SPECIFIC PREP.</h1>
                            <h2 className='text-[1.1rem] font-bold text-[#FA471C]'>76%</h2>
                        </div>
                        <progress className="progress w-full" value="76" max="100"></progress>
                    </div>


                    <div className='mt-[1.5rem]'>
                        <div className='flex justify-between'>
                            <h1 className='text-[1.1rem] font-bold text-[#FA471C]'>FITNESS</h1>
                            <h2 className='text-[1.1rem] font-bold text-[#FA471C]'>45%</h2>
                        </div>
                        <progress className="progress w-full" value="45" max="100"></progress>
                    </div>


                    <div className='mt-[1.5rem]'>
                        <div className='flex justify-between'>
                            <h1 className='text-[1.1rem] font-bold text-[#FA471C]'>PHYSIOTHERAPY</h1>
                            <h2 className='text-[1.1rem] font-bold text-[#FA471C]'>67%</h2>
                        </div>
                        <progress className="progress w-full" value="67" max="100"></progress>
                    </div>




                </div>








                <div>
                    <img className='w-full h-full' src={infoimg2} alt="" />
                </div>


            </div>


        </div>
    );
};

export default OurProcessInfo2;