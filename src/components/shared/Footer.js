import React from 'react';
import { FaAngleRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-slate-900 py-20'>
            <section className='w-4/5 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5'>
                <div>
                    <h1 className='text-slate-200 uppercase text-1.5xl font-bold pb-2'>About</h1>
                    <div className='text-slate-200 flex flex-col'>
                        <Link className='text-bold'>About Us</Link>
                        <Link className='inline-block'>Careers</Link>
                        <Link className='inline-block'>Awards & Recognition</Link>
                        <Link className='inline-block'>Investors</Link>
                        <Link className='inline-block'>Bata Industrials</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-slate-200 uppercase text-1.5xl font-bold pb-2'>Information</h1>
                    <div className=' text-slate-200 flex flex-col'>
                        <Link className='block'>bKash Payments</Link>
                        <Link className='block'>TERMS & CONDITIONS</Link>
                        <Link className='block'>Payment Options</Link>
                        <Link className='block'>Privacy Policy</Link>
                        <Link className='block'>Coverage areas</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-slate-200 uppercase text-1.5xl font-bold pb-2'>Poputar Brands</h1>
                    <div className='text-slate-200 flex flex-col'>
                        <Link>Bata</Link>
                        <Link>Hush Puppies</Link>
                        <Link>Power</Link>
                        <Link>North Star</Link>
                        <Link>Comfit</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-slate-200 uppercase text-1.5xl font-bold pb-2'>Customer Service</h1>
                    <div className='text-slate-200 flex flex-col'>
                        <Link>FAQs</Link>
                        <Link>MyBata</Link>
                        <Link>Bata Stores</Link>
                        <Link>All About Feet</Link>
                        <Link>Report Issue</Link>
                    </div>
                </div>
                <div>
                    <h1 className=' text-slate-200 uppercase text-1.5xl font-bold pb-2'>Info</h1>
                    <div className='text-slate-200 flex flex-col'>
                        <p>Bata Shoe Company Bangladesh Ltd.</p>
                        <p>Tongi Gazipur, Bangladesh.</p>
                        <p>Call us at: 09678772828 (9am-9pm)</p>
                        <p>Email: bd.customercare@bata.com</p>
                    </div>
                </div>
            </section>
            <hr className='w-4/5 mx-auto my-5' />
            <section className='flex flex-raw items-center w-4/5 mx-auto justify-between'>
                <div className='lg:basis-2/4'>
                    <p className='text-slate-200 py-2'>Sign up for our Newsletter</p>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 right-0 flex items-center bg-slate-600 m-1 px-1 rounded-sm">
                            <FaAngleRight className='inline-block' />
                        </span>
                        <input className="placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter your email." type="text" name="search" />
                    </label>
                </div>
                <div className='flex flex-row gap-2'>
                    <FaFacebook className='cursor-pointer' size={20} color='blue'/>
                    <FaYoutube className='cursor-pointer' size={20} color='red'/>
                    <FaTwitter className='cursor-pointer' size={20} color='blue'/>
                    <FaInstagram className='cursor-pointer' size={20} color='orange'/>
                </div>

            </section>
            <div>
                <p className='text-slate-200 text-center pt-5 w-4/5 mx-auto'>&copy; 2022 Bata Shoe Company Bangladesh Ltd. Tongi, Postal code - 2100, Sherpur,Mymensingh, Bangladesh</p>
            </div>
        </footer>
    );
};

export default Footer;