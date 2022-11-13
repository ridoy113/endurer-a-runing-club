import React from 'react';
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr'



const ContactUsInfo = () => {
    return (
        <div>
            <div className='py-[9rem] px-[3rem] md:px-[5rem] lg:px-[7rem]  bg-[#F2F1F1]'>

                <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-11'>

                    <div className='ml-0 lg:ml-[7rem]'>
                        <h1 className='text-3xl font-bold text-[#FA471C] '>GET IN TOUCH.</h1>

                        <div className=''>
                            <p className='h-[3px] w-[5rem] bg-black my-[1rem] ml-[2px]'></p>
                        </div>

                        <p className='tracking-wider leading-7 mb-[2rem] text-black'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque.</p>

                        <div>
                            <div className='flex justify-between mb-[1.5rem]'>
                                <p className='font-bold text-[#FA471C]'>PHONE:</p>
                                <p className='tracking-widest text-black cursor-pointer hover:text-[#FA471C] ease-in duration-300'>01874997427</p>
                            </div>

                            <div className='flex justify-between mb-[1.5rem]'>
                                <p className='font-bold text-[#FA471C]'>E-MAIL:</p>
                                <p className='tracking-wider text-black cursor-pointer hover:text-[#FA471C] ease-in duration-300'>almamounhridoy113@gmail.com</p>
                            </div>

                            <div className='flex justify-between mb-[1.5rem]'>
                                <p className='font-bold text-[#FA471C]'>ADDRESS:</p>
                                <p className='tracking-wide text-black cursor-pointer hover:text-[#FA471C] ease-in duration-300'>Abidpour, Bourichong, Comilla</p>
                            </div>

                            <div className='flex justify-between mb-[1.5rem]'>
                                <p className='font-bold text-[#FA471C]'>FOLLOW:</p>
                                <p className='flex gap-4 '>
                                    <h1 className='tracking-widecursor-pointer text-[#FA471C] ease-in duration-300 text-[1.2rem] cursor-pointer'>
                                        <AiOutlineTwitter />
                                    </h1>
                                    <h1 className='tracking-widecursor-pointer text-[#FA471C] ease-in duration-300 text-[1.2rem] cursor-pointer'>
                                        <AiFillFacebook />
                                    </h1>
                                    <h1 className='tracking-widecursor-pointer text-[#FA471C] ease-in duration-300 text-[1.2rem] cursor-pointer'>
                                        <AiFillInstagram />
                                    </h1>
                                    <h1 className='tracking-widecursor-pointer text-[#FA471C] ease-in duration-300 text-[1.2rem] cursor-pointer'>
                                        <GrLinkedinOption />
                                    </h1>
                                </p>
                            </div>

                        </div>

                    </div>







                    <div className='mr-0 lg:mr-[6rem]'>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39290.09813143898!2d91.02986629945016!3d23.526421234004573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37546526125667c9%3A0xe85d37f670b6024a!2sAbidpur%20GaziBari%20Jame%20Masjid!5e1!3m2!1sen!2sbd!4v1668321025225!5m2!1sen!2sbd" width="100%" height="370"></iframe>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUsInfo;