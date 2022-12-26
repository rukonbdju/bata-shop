import React, { useState } from 'react';
import { MdAccountCircle, MdClear } from "react-icons/md";
import { FaCartArrowDown, FaBars,FaSistrix, FaAngleDown } from "react-icons/fa";
import logo from '../../assets/logo/bata.png'
import { Link } from 'react-router-dom';

const Navber = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='bg-slate-200 p-2 relative '>
            <div className='flex flex-row justify-between items-center lg:w-11/12 mx-auto'>
                <div>
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className='hidden sm:hidden md:hidden lg:flex flex-row gap-8 text-base font-bold items-center text-slate-600'>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white'  to="/home">Home</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white'  to="/men">Men</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white'  to="/women">Women</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white'  to="/children">Children</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white'  to="/blogs">Blogs</Link>
                </div>
                <div>
                    <div className='hidden sm:hidden md:block lg:block'>
                        <input className='border rounded-md p-1 bg-slate-100' type="text" name="" placeholder='Search' id="" />
                    </div>
                    <div className='block sm:block md:hidden lg:hidden'>  
                        <FaSistrix color='DarkSlateGray' size="2rem"/>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='relative'>
                        <FaCartArrowDown color='DarkSlateGray' size='2rem' />
                        <div className='absolute -top-2 -right-2 '><span className='flex justify-center text-white font-bold bg-red-600 w-6 h-6 rounded-full'>30</span></div>
                    </div>
                    <div className='h-6 border-l border-slate-900'></div>
                    <div className='border-4 rounded-full p-1 hover:bg-slate-400 '>
                        <Link to='/login'><MdAccountCircle color='DarkSlateGray' size="2rem" /></Link>
                    </div>
                    <div className='block md:block lg:hidden'>
                        {
                            openMenu ? <div onClick={() => setOpenMenu(false)} className='block md:block lg:hidden'>
                                <MdClear color='DarkSlateGray' size="2rem" />
                            </div> : <div onClick={() => setOpenMenu(true)} >
                                <FaBars color='DarkSlateGray' size="2rem" />
                            </div>
                        }
                    </div>

                </div>
            </div>
            {

                openMenu && <div className='flex flex-col gap-4 lg:hidden text-base font-bold items-center absolute z-10 bg-slate-200 w-full left-0 text-slate-600'>
                    <Link className='hover:bg-slate-400 rounded block px-3'  onClick={() => setOpenMenu(false)} to="/home">Home</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3'  onClick={() => setOpenMenu(false)} to="/men">Men</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3'  onClick={() => setOpenMenu(false)} to="/women">Women</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3'  onClick={() => setOpenMenu(false)} to="/children">Children</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3'  onClick={() => setOpenMenu(false)} to="/accessories">Accessories</Link>
                    <div className='relative group'>
                        <div className='group-hover:block'>
                            <Link className='inline-block'>Brand <FaAngleDown className='inline'/></Link>
                        </div>
                        <div className='absolute hidden group-hover:flex flex-col gap-3 bg-slate-200 z-40 p-3'>
                            <Link className='hover:bg-slate-400 flex flex-nowrap rounded'>Adidas</Link>
                            <Link className='hover:bg-slate-400 flex flex-nowrap rounded'>Bata</Link>
                            <Link className='hover:bg-slate-400 flex flex-nowrap rounded'>Comfits</Link>
                            <Link className='hover:bg-slate-400 flex flex-nowrap rounded'>Hush_Puppies</Link>
                            <Link className='hover:bg-slate-400 flex flex-nowrap rounded'>North_Star</Link>
                            <Link className='hover:bg-slate-400 flex flex-nowrap rounded'>power</Link>
                        </div>
                    </div>
                    <Link className='hover:bg-slate-400 rounded block px-3'  onClick={() => setOpenMenu(false)} to="/blogs">Blogs</Link>
                </div>
            }

        </nav>
    );
};

export default Navber;