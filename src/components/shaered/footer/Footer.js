import React from 'react';
import footerLogo from './assets/Logo-1x1-white-1.png';
import footerMap from './assets/footer-map.png';



const Footer = () => {
    return (
        <div>
            <div className='bg-black py-[3rem] lg:py-[5rem] px-[2.5rem] lg:px-[7.5rem] grid grid-cols-1 lg:grid lg:grid-cols-4 gap-10'>

                <div>
                    <img src={footerLogo} alt="" />
                    <p className='text-[#fff] py-[1.5rem] tracking-wide leading-7'>Lorem ipsum dolor sit amet, consectetur adipiSuspendisse ultrices hendrerit nunc vitae vel asodales. Ac lectus vel risus suscipit venenatis.</p>

                    <p className='text-[#fff] tracking-wide leading-6 italic cursor-pointer hover:text-[#FA471C] ease-in duration-300 '>Rohr PL 989, NY <br />01874997427 <br />almamounhridoy113@gmail.com</p>
                </div>

                <div>
                    <h1 className='text-[1.2rem] font-bold text-white tracking-wide'>LINKS</h1>

                    <div className='py-[1.5rem]'>
                        <p className='text-[#fff] tracking-wide leading-6 italic cursor-pointer hover:text-[#FA471C] ease-in duration-300 '>
                             More styles for home  
                        </p>
                    </div>

                </div>

                <div>1</div>

                <div>1</div>

            </div>
        </div>
    );
};

export default Footer;