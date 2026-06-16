'use client';

import Image from 'next/image';
import React from 'react';



export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-[#120a07] shadow-sm p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul

                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='after:text-[#E2874B]'><a>Home</a></li>
                            <li className='after:text-[#E2874B]'><a>About</a></li>
                            <li className='after:text-[#E2874B]'><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Image src="/devanshlogo.png" alt="Logo" width={72} height={72} />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        <li className=" relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#E2874B] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E2874B] transition-colors duration-300">
                            <a href='#home'>Home</a>
                        </li>
                        <li className=" after:content-[''] relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#E2874B] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E2874B] transition-colors duration-300 ">
                            <a href='#about'>About</a>
                        </li>
                        <li className=" relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#E2874B] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E2874B] transition-colors duration-300 ">
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn bg-[#E2874B]">Book a Session</a>
                </div>
            </div>
        </>
    )
}