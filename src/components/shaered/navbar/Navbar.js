import React from 'react';
import { Link } from 'react-router-dom';
import logo from './navImage/logo_white.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#FA471C] p-[1.4rem]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-[12rem] md:w-[16rem]">
                            <li><Link className='text-stone-700 text-[1.2rem] hover:text-[#FA471C] font-normal' to="/">HOME</Link></li>
                            <hr />

                            <li><Link className='text-stone-700 text-[1.2rem] hover:text-[#FA471C] font-normal' to="/aboutUs">ABOUT US</Link></li>
                            <hr />

                            <li><Link className='text-stone-700 text-[1.2rem] hover:text-[#FA471C] font-normal' to="/ourProcess">OUR PROCESS</Link></li>
                            <hr />


                        </ul>
                    </div>
                    <img className="w-auto md:w-[178px] lg:w-[178px] lg:ml-8" src={logo} alt="" />
                </div>



                <div className="dropdown dropdown-hover navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='text-white hover:text-zinc-300 font-bold' to="/">HOME</Link></li>

                        <li><Link className='text-white hover:text-zinc-300 font-bold' to="/aboutUs">ABOUT US</Link></li>

                        <li><Link className='text-white hover:text-zinc-300 font-bold' to="/ourProcess">OUR PROCESS</Link></li>




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