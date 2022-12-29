import React from 'react';
import { useLocation } from 'react-router-dom';
import useProducts from '../../customHooks/useProducts';
import Product from '../shared/Product';

const Men = () => {
    let location = useLocation();
    const {products}=useProducts(location.pathname);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto my-10 justify-center gap-4'>
            {
                products.map((product)=>
                    <Product key={product._id} product={product}></Product>
                )
            }
        </div>
    );
};

export default Men;