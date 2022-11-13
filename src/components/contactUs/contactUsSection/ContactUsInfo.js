import React from 'react';
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr'



const ContactUsInfo = () => {
    return (
        <div>
            <div className='py-[6rem] px-[3rem] md:px-[5rem] lg:px-[7rem]  bg-[#F2F1F1]'>

                <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-10'>

                    <div className='pl-0 lg:pl-[4rem]'>
                        <h1>GET IN TOUCH.</h1>

                        <div className=''>
                            <p className='h-[3px] w-[8rem] bg-[#FA471C] my-[1rem] ml-[2px]'></p>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque.</p>

                        <div>
                            <div>
                                <p>PHONE:</p>
                                <p>01874997427</p>
                            </div>

                            <div>
                                <p>E-MAIL:</p>
                                <p>almamounhridoy113@gmail.com</p>
                            </div>

                            <div>
                                <p>ADDRESS:</p>
                                <p>Abidpour, Bourichong, Comilla</p>
                            </div>

                            <div>
                                <p>FOLLOW:</p>
                                <p>
                                    <AiOutlineTwitter />
                                    <AiFillFacebook />
                                    <AiFillInstagram />
                                    <GrLinkedinOption />
                                </p>
                            </div>

                        </div>

                    </div>







                    <div className='pr-0 lg:pr-[4rem]'>
                        <p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39290.09813143898!2d91.02986629945016!3d23.526421234004573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37546526125667c9%3A0xe85d37f670b6024a!2sAbidpur%20GaziBari%20Jame%20Masjid!5e1!3m2!1sen!2sbd!4v1668321025225!5m2!1sen!2sbd" width="100%" height="300"></iframe>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUsInfo;