import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid md:grid-cols-5 lg:grid lg:grid-cols-5 gap-6 pb-[3rem] px-[3rem] lg:pb-[5rem] lg:px-[7rem] text-center'>
                <div className='my-[3rem]'>
                    <CountUp
                        className='text-[#FA471C] text-7xl font-bold'
                        start={10}
                        end={283}
                        duration={5}
                    />
                    <p className='text-black font-bold text-[1.3rem] mt-[1rem]'>MILES RUN</p>
                </div>
                <div className='py-[3rem]'>
                    <CountUp
                        className='text-[#FA471C] text-7xl font-bold'
                        start={10}
                        end={156}
                        duration={5}
                    />
                    <p className='text-black font-bold text-[1.3rem] mt-[1rem]'>LOCATIONS</p>
                </div>
                <div className='py-[3rem]'>
                    <CountUp
                        className='text-[#FA471C] text-7xl font-bold'
                        start={10}
                        end={982}
                        duration={5}
                    />
                    <p className='text-black font-bold text-[1.3rem] mt-[1rem]'>MEMBERS</p>
                </div>
                <div className='py-[3rem]'>
                    <CountUp
                        className='text-[#FA471C] text-7xl font-bold'
                        start={10}
                        end={321}
                        duration={5}
                    />
                    <p className='text-black font-bold text-[1.3rem] mt-[1rem]'>AWARDS</p>
                </div>
                <div className='py-[3rem]'>
                    <CountUp
                        className='text-[#FA471C] text-7xl font-bold'
                        start={10}
                        end={556}
                        duration={5}
                    />
                    <p className='text-black font-bold text-[1.3rem] mt-[1rem]'>DAYS ACTIVE</p>
                </div>

            </div>
        </div>
    );
};

export default Counter;