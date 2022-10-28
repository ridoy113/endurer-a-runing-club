import React from 'react';
import { Link } from 'react-router-dom';
import logo from './navImage/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-zinc-500 p-[1.4rem]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-[12rem] md:w-[16rem]">
                            <li><Link className='text-stone-700 text-[1.2rem] hover:text-[#FA471C] font-normal' to="/">HOME</Link></li>
                            <hr />


                            <li tabIndex={0}>
                                <a className="justify-between">
                                    <Link className='text-stone-700 text-[1.2rem] hover:text-[#FA471C] font-normal' to="/">PAGES</Link>
                                    <hr />
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <Link className='hover:text-[#FA471C]' to="">About Us</Link>
                                        <hr />
                                        <Link className='hover:text-[#FA471C]' to="">About Me</Link>
                                        <hr />
                                        <Link className='hover:text-[#FA471C]' to="">Our Process</Link>
                                        <hr />
                                        <Link className='hover:text-[#FA471C]' to="">Contact Us</Link>
                                    </li>

                                </ul>
                            </li>

                            

                        </ul>
                    </div>
                    <img className="w-auto md:w-[178px] lg:w-[178px] lg:ml-8" src={logo} alt="" />
                </div>



                <div className="dropdown dropdown-hover navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='text-white hover:text-[#FA471C] font-bold' to="/">HOME</Link></li>


                        <li tabIndex={0}>
                            <a>
                                <span className='text-white hover:text-[rgb(250,71,28)] font-bold'>PAGES</span>
                            </a>
                            <ul className="p-2 bg-stone-900 bg-opacity-50 border-t-2 border-[#FA471C] p-[1.5rem] pr-[4.4rem]">
                                <li>
                                    <Link className='hover:text-white' to="">About Us</Link>
                                    <Link className='hover:text-white' to="">About Me</Link>
                                    <Link className='hover:text-white' to="">Our Process</Link>
                                    <Link className='hover:text-white' to="">Contact Us</Link>
                                </li>
                            </ul>
                        </li>

                        
                    </ul>
                </div>
                <div className="navbar-end mr-[2rem]">
                    <a className='text-white text-2xl lg:text-3xl mx-[0.4rem] lg:mx-[0.7rem] cursor-cell	'><AiOutlineShoppingCart /></a>
                    <a className='text-white text-2xl lg:text-3xl mx-[0.4rem] lg:mx-[0.7rem] cursor-pointer'><AiOutlineSearch /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;