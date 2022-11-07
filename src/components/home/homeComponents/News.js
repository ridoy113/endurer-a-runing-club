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
                    <p>News / 07.03.2018</p>
                    <h1>WIN FROM WITHIN</h1>
                    <p>Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas
                    </p>
                    <h4>READ MORE <p><AiOutlineArrowRight /></p></h4>
                </div>

                <div>1</div>
                <div>1</div>
            </div>


        </div>
    );
};

export default News;