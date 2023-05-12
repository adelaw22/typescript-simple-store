import React from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
// import ProductImg from '../assets/images/backpack.png'
  

const ProductItem = ({productData}:any) => {
  return (
    <div className='w-full mb-9'>
        <div className='w-full h-96 bg-gray-100 relative mb-4 cursor-pointer'>
            <img className='w-4/5 m-auto absolute inset-0 transition duration-150 hover:scale-110 ' src={productData.img} alt="" />
        </div>
       
            <div className='text-gray-700'>
                <div className='flex justify-between items-center'>
                    <NavLink to='/product'> 
                        <span className="text-lg font-semibold hover:text-gray-900">{productData.productName}</span>
                    </NavLink>
                    <button className="w-8 h-8 hover:bg-gray-100 rounded-full ">
                        <ShoppingCartIcon className="h-5 w-5 mx-auto"/>
                    </button>
                </div>
                <p className='text-sm hover:text-gray-900 cursor-pointer'>{productData.price}</p>
            </div>
       
    </div>
  )
}

export default ProductItem

// rgb(236,236,236)