import React from 'react';
import footerLogo from './assets/Logo-1x1-white-1.png';
import footerMap from './assets/footer-map.png';
import { TbPoint } from 'react-icons/tb';
import { GrTwitter } from 'react-icons/gr';



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
                        <p className='text-[#fff] tracking-wide leading-6 cursor-pointer hover:text-[#FA471C] ease-in duration-300 flex mb-[1.5rem]'>
                            <p className='mt-[3px] mr-[0.5rem]'><TbPoint /></p>  More styles for home
                        </p>
                        <p className='text-[#fff] tracking-wide leading-6 cursor-pointer hover:text-[#FA471C] ease-in duration-300 flex mb-[1.5rem]'>
                            <p className='mt-[3px] mr-[0.5rem]'><TbPoint /></p>  Custom image title and font
                        </p>
                        <p className='text-[#fff] tracking-wide leading-6 cursor-pointer hover:text-[#FA471C] ease-in duration-300 flex mb-[1.5rem]'>
                            <p className='mt-[3px] mr-[0.5rem]'><TbPoint /></p>  Custom font style
                        </p>
                        <p className='text-[#fff] tracking-wide leading-6 cursor-pointer hover:text-[#FA471C] ease-in duration-300 flex mb-[1.5rem]'>
                            <p className='mt-[3px] mr-[0.5rem]'><TbPoint /></p>  Custom parallax sections
                        </p>
                        <p className='text-[#fff] tracking-wide leading-6 cursor-pointer hover:text-[#FA471C] ease-in duration-300 flex mb-[1.5rem]'>
                            <p className='mt-[3px] mr-[0.5rem]'><TbPoint /></p>  Custom image galleries
                        </p>
                    </div>

                </div>

                <div>
                    <h1 className='text-[1.2rem] font-bold text-white tracking-wide'>TWITTER FEED</h1>

                    <div className='py-[1.5rem] flex'>
                        <p className='mr-[0.7rem] text-2xl text-white'><GrTwitter /></p>

                        <div className='text-[#fff] tracking-wide leading-7'>
                            <span className='text-zinc-500 cursor-pointer hover:text-[#FA471C] ease-in duration-300'>@amridoy</span> <span className='text-zinc-500 cursor-pointer hover:text-[#FA471C] ease-in duration-300'>@Google</span> Hey, Thanks for writing in! Please submit a ticket on our helpcenter, and our agents will be… <span className='text-zinc-400 cursor-pointer hover:text-[#FA471C] ease-in duration-300'>https://ridoy-al-mamun.netlify.app/</span>

                            <p className='text-zinc-500 cursor-pointer hover:text-[#FA471C] ease-in duration-300 mt-[0.4rem]'>2 years ago</p>
                        </div>
                    </div>



                    <div className='py-[0.6rem] flex'>
                        <p className='mr-[0.7rem] text-2xl text-white'><GrTwitter /></p>

                        <div className='text-[#fff] tracking-wide leading-7'>
                            <span className='text-zinc-500 cursor-pointer hover:text-[#FA471C] ease-in duration-300'>@amridoy</span> Hi <span className='text-zinc-500 cursor-pointer hover:text-[#FA471C] ease-in duration-300'>@Google</span> Hey, Thanks for writing in! Please submit a ticket on our and our agents will be… <span className='text-zinc-400 cursor-pointer hover:text-[#FA471C] ease-in duration-300'>https://ridoy-al-mamun.netlify.app/</span>

                            <p className='text-zinc-500 cursor-pointer hover:text-[#FA471C] ease-in duration-300 mt-[0.4rem]'>1 years ago</p>
                        </div>
                    </div>



                </div>

                <div>1</div>

            </div>
        </div>
    );
};

export default Footer;