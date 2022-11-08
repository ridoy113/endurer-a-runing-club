import React from 'react';

const Submit = () => {
    return (
        <div>
            <div className='bg-[#FA471C] py-[3rem] lg:py-[5rem] px-[3rem] lg:px-[7.5rem] text-center'>
                <h1 className='text-[#fff] text-2xl font-semibold tracking-wide mt-[2rem]'>SIGN UP FOR OUR WEEKLY NEWSLETTER</h1>

                <div className='flex-none lg:flex justify-center my-[2rem]'>
                    <div>
                        <input type="text" placeholder="Enter Your Email..." className="bg-[#FA471C] input border-solid border-[1px] border-[#fff] rounded-none text-[#fff]
                        w-[16rem] h-[3rem] lg:w-[27rem] lg:h-[3.5rem] mx-[1rem]
                        my-[1rem] lg:my-[0rem]" />
                    </div>


                    <button className='border-solid border-[1px] border-white w-[10.5rem] h-[3rem] lg:w-[12rem] lg:h-[3.5rem] hover:w-[11rem] hover:h-[3.2rem] hover:lg:w-[12.5rem] hover:lg:h-[4rem] ease-in-out duration-300'>
                        <button className='w-[9.9rem] h-[2.4rem] lg:w-[11.5rem] lg:h-[3rem] bg-white text-black font-bold'>SUBMIT</button>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Submit;