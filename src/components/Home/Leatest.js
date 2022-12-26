import React, { useEffect, useState } from 'react';
import Product from './Product';

const Leatest = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='w-11/12 mx-auto mb-10'>
            <h1 className='text-xl text-slate-800 font-bold mb-5 text-center uppercase'>New Products</h1>
            <div className='flex flex-row overflow-auto gap-8 items-center justify-center  mb-5'>
                <span className='font-bold bg-slate-200 border-2 border-red-500 cursor-pointer px-2 rounded-full'>Sneakers</span>
                <span className='font-bold bg-slate-200 border-2 border-red-500 cursor-pointer px-2 rounded-full'>Sandals</span>
                <span className='font-bold bg-slate-200 border-2 border-red-500 cursor-pointer px-2 rounded-full'>Casuals</span>
                <span className='font-bold bg-slate-200 border-2 border-red-500 cursor-pointer px-2 rounded-full'>Ladies_Flats</span>
                <span className='font-bold bg-slate-200 border-2 border-red-500 cursor-pointer px-2 rounded-full'>Accessories</span>
                <span className='font-bold bg-slate-200 border-2 border-red-500 cursor-pointer px-2 rounded-full'>Sports</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5  justify-center items-center'>
            {
                products.map(product=><Product key={product.name} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Leatest;