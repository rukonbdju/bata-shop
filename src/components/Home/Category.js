import React from 'react';
import men from '../../assets/category/men.jpg';
import women from '../../assets/category/women.jpg';
import children from '../../assets/category/children.jpeg';
import accessories from '../../assets/category/accessories.jpg';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='w-11/12  mx-auto my-10'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10 items-center'>
            <Link to="/men">
                <div className=' group relative text-center overflow-hidden'>
                    <img className='brightness-50 group-hover:scale-125 duration-500 ' src={men} alt="" srcset="" />
                <h2 className=' text-white font-bold text-base md:text-2xl lg:text-3xl absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>MEN</h2>
                </div>
            </Link>
            <Link to='/women'>
                <div className=' group relative text-center overflow-hidden'>
                    <img className='brightness-50 group-hover:scale-125 duration-500 ' src={women} alt="" srcset="" />
                <h2 className=' text-white font-bold text-sm md:text-2xl lg:text-3xl absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>WOMEN</h2>
                </div>
            </Link>
            <Link to='/children'>
                <div className='group relative text-center overflow-hidden'>
                    <img className='brightness-50 group-hover:scale-125 duration-500 ' src={children} alt="" srcset="" />
                <h2 className=' text-white font-bold text-base md:text-2xl lg:text-3xl absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>CHILDREN</h2>
                </div>
            </Link>
            <Link to='/accessories'>
                <div className='group relative text-center overflow-hidden'>
                    <img className='brightness-50 group-hover:scale-125 duration-500 ' src={accessories} alt="" srcset="" />
                <h2 className=' text-white font-bold text-base md:text-2xl lg:text-3xl absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>ACCESSORIES</h2>
                </div>
            </Link>
        </div>
        </div>
    );
};

export default Category;