import React, { useState } from 'react';
import { MdAccountCircle, MdClear } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { FaCartArrowDown, FaBars, FaSistrix } from "react-icons/fa";
import logo from '../../assets/logo/bata.png'
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navber = ({product}) => {
    const navItems = () => {
        return <>
            <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/home">Home</Link>
            <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/men">Men</Link>
            <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/women">Women</Link>
            <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/kids">Kids</Link>
            <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/blogs">Blogs</Link>

        </>
    }

    const [openMenu, setOpenMenu] = useState(false);
    const [user, loading, error] = useAuthState(auth)
    const [signOut] = useSignOut(auth);

    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {

        }
    }
    console.log(user, loading, error);

    const userImage = () => {
        if (user?.photoURL) {
            return <div className=''>
                <img className='rounded-full' src={user?.photoURL} alt="" width="40px" />
            </div>
        }
        else {
            <MdAccountCircle />
        }

    }

    return (
        <nav className='bg-slate-300 relative'>
            <div className='block md:block lg:hidden'>
                <div className=' py-2 w-11/12 mx-auto flex flex-row justify-between items-center gap-2'>
                    <div>
                        <img src={logo} alt="" srcSet="" />
                    </div>
                    <div className='flex w-full flex-row gap-2 '>
                        <input className='p-1 w-full rounded active:border-0 active:outline-none focus:border-0 focus:outline-none ' type="text"
                            placeholder='search'
                            name=""
                            id=""
                        />
                        <div className='bg-red-700 rounded hover:bg-slate-900 p-1'>
                            <FaSistrix color='white' size="1.5rem" />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className='w-11/12 mx-auto py-2 flex flex-row justify-between items-center '>
                <div className='hidden md:hidden lg:block'>
                    <img src={logo} alt="" srcSet="" />
                </div>
                <div className='hidden md:hidden lg:flex flex-row gap-2 '>
                    <input className='p-1 inline-block rounded active:border-0 active:outline-none focus:border-0 focus:outline-none ' type="text"
                        placeholder='search'
                        name=""
                        id=""
                    />
                    <div className='bg-red-700 rounded hover:bg-slate-900 p-1'>
                        <FaSistrix color='white' size="1.5rem" />
                    </div>
                </div>
                <div className='block md:block lg:hidden'>
                    {
                        openMenu ? <div onClick={() => setOpenMenu(false)} className='block md:block lg:hidden'>
                            <MdClear color='black' size="1.5rem" />
                        </div> : <div onClick={() => setOpenMenu(true)} >
                            <FaBars color='DarkSlateGray' size="1.5rem" />
                        </div>
                    }
                </div>
                <div className='flex flex-row gap-5 justify-center items-center'>
                    <div className='hidden md:hidden lg:flex flex-row gap-5 text-base font-bold items-center text-slate-600'>
                        {navItems()}
                    </div>
                    <div className='relative'>
                        <FaCartArrowDown color='DarkSlateGray' size='1.5rem' />
                        <div className='absolute -top-3 -right-4 '>
                            <span className='flex justify-center text-white bg-red-600 w-6 h-6 rounded-full'>{product.length}</span>
                        </div>
                    </div>
                    <div>
                        {
                            user ? <div className=''>
                                <div className='group relative'>
                                    <button className='p-1 flex flex-row items-center gap-1 uppercase font-bold border-2 rounded border-red-700 text-red-700 hover:bg-red-700 hover:text-slate-100 '>
                                        {userImage()}
                                        {user.displayName.split(" ", 1)[0]}
                                        <BsChevronDown color='white' size="1.5rem" />
                                    </button>
                                    <div className='p-2 absolute hidden group-hover:flex flex-col gap-2 z-50 bg-slate-300 rounded w-full' >
                                        <button className='p-1 uppercase font-bold border-2 rounded border-red-700 text-red-700 hover:bg-red-700 hover:text-slate-100'>dashboard</button>
                                        <button onClick={() => handleSignOut()} className='p-1 uppercase font-bold border-2 rounded border-red-700 text-red-700 hover:bg-red-700 hover:text-slate-100'>logout</button>
                                    </div>
                                </div>
                            </div>
                                :
                                <Link to="/login"><button className='p-1 uppercase font-bold border-2 rounded border-red-700 text-red-700 hover:bg-red-700 hover:text-slate-100 '>
                                    login
                                </button></Link>
                        }
                    </div>

                </div>

            </div>
            {
                openMenu && <div className='flex flex-col gap-4 lg:hidden text-base font-bold absolute z-10 bg-slate-200 w-full py-2 left-0 text-slate-600'>
                    {navItems()}
                </div>
            }
        </nav>
    );
};

export default Navber;