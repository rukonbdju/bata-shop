import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CardContext } from '../../App';
import useProducts from '../../customHooks/useProducts';


const ProductDetails = () => {
    const shoppingCart=useContext(CardContext)
    const { _id } = useParams()
    console.log(_id)
    const { products } = useProducts(`/products/${_id}`)
    const { name, brand, price, product_ditails, rating, discount, img,quantity } = products;
    const discountPrice=parseInt(price)-parseInt(price)*(parseInt(discount)/100);
    console.log(products)
    return (
        <div className='w-5/6 mx-auto my-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
                <div >
                    <img className='mx-auto' src={img} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-xl pl-2 font-bold'>{name}</h1>
                    <div>
                        <table>
                            <tr className='p-6'>
                                <td className='p-2'>Brand:</td>
                                <td className='p-2'>{brand}</td>
                            </tr>
                            <tr className='p-6'>
                                <td className='p-2'>Rating:</td>
                                <td className='p-2'>{rating}</td>
                            </tr>
                            <tr className='p-6'>
                                <td className='p-2'>Availabelity:</td>
                                <td className='p-2'>{parseInt(quantity)>0?"In Stock":"Out of Stock"}</td>
                            </tr>
                        </table>
                        <div className='pl-2'>
                        <h1 className='text-2xl text-slate-500 font-bold'>TK <del>{price}</del> <span className='text-red-700'>TK {parseFloat(discountPrice.toFixed(2))}</span> <span className='text-sm inline-block p-1 text-slate-100 bg-red-700 rounded-lg'>-{discount}%</span></h1>
                        <h2 className='text-xl font-bold pt-4'>Product details:</h2>
                        <p className='py-5 italic'>{product_ditails}</p>
                        </div>
                        <div className='flex flex-row justify-between gap-5 ml-2'>
                            <button className='w-full font-bold bg-red-700 text-slate-100 border-red-700 uppercase hover:bg-red-200 hover:text-slate-900 p-2 inline-block rounded'>Shop Now</button>
                            <button onClick={()=>shoppingCart(products)} className='w-full font-bold bg-red-700 text-slate-100 border-red-700 uppercase hover:bg-red-200 hover:text-slate-900 p-2 inline-block rounded'>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;