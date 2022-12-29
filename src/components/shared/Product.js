import React, { useContext } from 'react';
import { BsArrowUpRightSquareFill, BsCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CardContext } from '../../App';

const Product = ({product}) => {
    const shoppingCart=useContext(CardContext)

    const {_id,brand,name,img,price, discount}=product;
    const discountPrice=parseInt(price)-parseInt(price)*(parseInt(discount)/100);
    return (
        <div className=''>
            <div className='bg-slate-100 p-2 rounded shadow-md'>
                <div className=''>
                    <img className='rounded-lg' src={img} alt="" width="100%"/>
                </div>
                <h1>{brand}</h1>
                <h1 className='font-bold'>{name}</h1>
                <h1 className='text-xl my-2 text-slate-500 font-bold'> 
                <del>TK{price}</del> 
                <span className='text-red-700 px-1'>TK {parseFloat(discountPrice.toFixed(2))}</span> 
                <span className='text-sm inline-block  text-slate-100 bg-red-700 rounded'>-{discount}%</span>
                </h1>
                <div className='flex mt-5 flex-row gap-2 justify-between'>
                <button onClick={()=>{shoppingCart(product)}} className='uppercase flex flex-row gap-1 items-center text-sm font-bold border-2 rounded p-1 bg-red-700 text-white border-red-700'>
                    <span>Add To Cart</span>
                    <BsCartPlusFill size='1.5rem'/>
                </button>
                <Link to={`/products/${_id}`}>
                <button className='uppercase flex flex-row gap-1 items-center text-sm font-bold border-2 rounded  p-1 bg-red-700 text-white border-red-700'>
                    <span>Product details</span>
                    <BsArrowUpRightSquareFill size='1.5rem'/>
                </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;