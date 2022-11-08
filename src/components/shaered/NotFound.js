import React from 'react';

const NotFound = () => {
    return (
        <div className='py-[4rem] lg:py-[5rem] px-[2rem] lg:px-[3rem]'>
            <div className='text-center'>

                <h1 className='text-[5rem] lg:text-[8rem] font-bold text-zinc-600'>404</h1>

                <h3 className='text-2xl lg:text-4xl text-[#FA471C] font-bold mb-[0.5rem]'>PAGE NOT FOUND</h3>

                <p className='text-black font-semibold tracking-wide'>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            </div>



            <div className='flex justify-center mt-[0.8rem]'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Type your search..." className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NotFound;