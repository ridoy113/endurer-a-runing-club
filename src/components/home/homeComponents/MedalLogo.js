import React from 'react';
import medal1 from '../assets/h1-client-hover-img-1.png';
import medal2 from '../assets/h1-client-hover-img-2.png';
import medal3 from '../assets/h1-client-hover-img-3.png';
import medal4 from '../assets/h1-client-hover-img-4.png';
import medal5 from '../assets/h1-client-hover-img-5.png';



const MedalLogo = () => {
    return (
        <div className='pb-[3rem] lg:pb-[7.5rem] px-[3rem] lg:px-[7rem] cursor-pointer'>
            <div className='grid grid-cols-2 lg:grid lg:grid-cols-5 text-center gap-y-10'>
                <div><img src={medal1} alt="" /></div>
                <div><img src={medal2} alt="" /></div>
                <div><img src={medal3} alt="" /></div>
                <div><img src={medal4} alt="" /></div>
                <div><img src={medal5} alt="" /></div>
            </div>
        </div>
    );
};

export default MedalLogo;