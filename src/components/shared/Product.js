import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {_id,brand,name,img,price}=product;
    return (
        <div className='border-2 border-slate-100 hover:border-2 hover:border-red-700 rounded p-1'>
            <div>
                <div className='p-2'>
                    <img className='bg-slate-100 rounded-lg' src={img} alt="" />
                </div>
                <h1>{brand}</h1>
                <h1>{name}</h1>
                <h1>Price: {price}</h1>
                <div className='flex flex-row gap-2 justify-between'>
                <button className='uppercase text-sm font-bold border-2 rounded p-1 hover:bg-red-700 hover:text-white border-red-700'>Add To Cart</button>
                <Link to={`/products/${_id}`}>
                <button className='uppercase text-sm font-bold border-2 rounded p-1 hover:bg-red-700 hover:text-white border-red-700'>Product details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;