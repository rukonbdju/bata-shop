import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../customHooks/useProducts';


const ProductDetails = () => {

    const { _id } = useParams()
    console.log(_id)
    const { products, loading, error } = useProducts(`/products/${_id}`)
    const { name, brand, price, details, rateing, discount, img,quantity } = products;
    console.log(products)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <div>
                        <table>
                            <tr className='p-6'>
                                <td className='p-2'>Brand:</td>
                                <td className='p-2'>{brand}</td>
                            </tr>
                            <tr className='p-6'>
                                <td className='p-2'>ProductId:</td>
                                <td className='p-2'>{_id}</td>
                            </tr>
                            <tr className='p-6'>
                                <td className='p-2'>Availabelity:</td>
                                <td className='p-2'>{parseInt(quantity)>0?"In Stock":"Out of Stock"}</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;