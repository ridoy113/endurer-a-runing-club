import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'




const News = () => {
    return (
        <div className='pb-[3rem] lg:pb-[7.5rem] px-[3rem] lg:px-[7.5rem]'>
            <div className='text-center text-4xl font-bold text-black'>
                <p>OUR NEWS.</p>
                <div className='flex justify-center'>
                    <p className='h-[0.2rem] w-[5rem] bg-[#FA471C] mt-[0.8rem] mb-[2rem]'></p>
                </div>
            </div>



            <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 gap-8 mt-[2rem] lg:mt-[4rem]'>

                <div>
                    <p className='text-zinc-500 tracking-wider mb-[0.3rem]'>News / 07.03.2018</p>
                    <h1 className='text-black text-[1.7rem] font-bold mb-[1.2rem]'>WIN FROM WITHIN</h1>
                    <p className='text-zinc-500 leading-7 tracking-wide'>Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas
                    </p>

                    <div className='flex text-black hover:text-[#F9461B] cursor-pointer ease-in duration-300 mt-[1.3rem]'>
                        <h4 className='font-bold tracking-wider mr-[0.3rem] hover:mr-[0.6rem] ease-in duration-300'>READ MORE</h4>
                        <p className='text-2xl'><AiOutlineArrowRight /></p>
                    </div>

                </div>

                
            </div>


        </div>
    );
};

export default News;