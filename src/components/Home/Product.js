import React from 'react';
import img1 from '../../assets/men/img1.webp'

const Product = ({product}) => {
    const {brand,name}=product;
    return (
        <div className='bg-slate-400 rounded p-5'>
            <div>
                <div className='p-8'>
                    <img className='rounded' src={img1} alt="" />
                </div>
                <h1>{brand}</h1>
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Product;