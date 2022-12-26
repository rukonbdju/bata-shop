import React from 'react';
import img1 from '../../assets/men/img1.webp'

const Product = ({product}) => {
    console.log(product)
    const {brand,name,img,price}=product;
    return (
        <div className='border-2 border-slate-100 hover:border-2 hover:border-red-700 rounded p-5'>
            <div>
                <div className='p-8'>
                    <img className='bg-slate-100 rounded-lg' src={img} alt="" />
                </div>
                <h1>{brand}</h1>
                <h1>{name}</h1>
                <h1>Price: {price}</h1>
                <button className='uppercase font-bold border-2 rounded p-2 hover:bg-red-700 hover:text-white border-red-700'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;