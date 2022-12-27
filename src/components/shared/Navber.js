import React, { useState } from 'react';
import { MdAccountCircle, MdClear } from "react-icons/md";
import { FaCartArrowDown, FaBars, FaSistrix } from "react-icons/fa";
import logo from '../../assets/logo/bata.png'
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navber = () => {
    const [showLogOutOption,setShowLogOutOption]=useState(false)
    const [openMenu, setOpenMenu] = useState(false);
    const [user, loading, error] = useAuthState(auth)
    const [signOut, oLoading, oError] = useSignOut(auth);
    console.log(user, loading, error);

    const userPhoto=()=>{
        if(user?.photoURL){
            return <img onClick={()=>setShowLogOutOption(false)} className='rounded-full'  src={user?.photoURL} alt='' width="40%" />
        }
        if(user?.photoURL===null){
            <div onClick={()=>setShowLogOutOption(true)} className='' >
                <MdAccountCircle color='DarkSlateGray' size="2rem" />
            </div>
        }
    }
    console.log(userPhoto);

    return (
        <nav className='bg-slate-200 p-2 relative '>
            <div className='flex flex-row justify-between items-center lg:w-11/12 mx-auto'>
                <div>
                    <img src={logo} alt="" srcSet="" />
                </div>
                <div className='hidden sm:hidden md:hidden lg:flex flex-row gap-8 text-base font-bold items-center text-slate-600'>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white' to="/home">Home</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white' to="/men">Men</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white' to="/women">Women</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white' to="/kids">Kids</Link>
                    <Link className='hover:bg-slate-400 rounded px-2 hover:text-white' to="/blogs">Blogs</Link>
                </div>
                <div>
                    <div className='hidden sm:hidden md:block lg:block'>
                        <input className='border rounded-md p-1 bg-slate-100' type="text" name="" placeholder='Search' id="" />
                    </div>
                    <div className='block sm:block md:hidden lg:hidden'>
                        <FaSistrix color='DarkSlateGray' size="2rem" />
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='relative'>
                        <FaCartArrowDown color='DarkSlateGray' size='2rem' />
                        <div className='absolute -top-2 -right-2 '><span className='flex justify-center text-white font-bold bg-red-600 w-6 h-6 rounded-full'>30</span></div>
                    </div>
                    {/* this is devider */}
                    <div className='h-6 border-l border-slate-900'></div>
                    <div className=''>
                    <div className='border-4 rounded-full'>
                        {
                            
                            user?userPhoto():<Link to='/login'>
                            <button className='uppercase rounded-xl font-bold border-1 border-slate-900 p-2 bg-slate-100 text-red-700'>Login</button>
                        </Link>
                        }
                        <div className={`${showLogOutOption?'block ':'hidden ' }bg-slate-200 absolute right-0 z-50 p-4`}>
                            <h1 className='text-xl font-bold'>{user?.displayName}</h1>
                            <button onClick={signOut} className='p-2 uppercase font-bold border-2 rounded-xl hover:text-red-700 hover:border-red-700'>Log Out</button>
                        </div>
                    </div>
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
                    <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/home">Home</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/men">Men</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/women">Women</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/kids">Kids</Link>
                    <Link className='hover:bg-slate-400 rounded block px-3' onClick={() => setOpenMenu(false)} to="/blogs">Blogs</Link>
                </div>
            }

        </nav>
    );
};

export default Navber;