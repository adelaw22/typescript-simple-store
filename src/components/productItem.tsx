import React from 'react'
import { NavLink } from 'react-router-dom'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { productDataType } from '../utilities/productsData'
import ProductCard from './productCard'


const ProductItem = ({productData}:any) => {
  return (
    <div className='w-full mb-9'>
        <ProductCard productImg={productData.img} />
       
       
        <div className='flex justify-between items-center text-gray-600 '>
            <div className='hover:text-gray-950'>
                <NavLink to='/product'> 
                    <p className="text-lg font-semibold mb-2">{productData.productName}</p>
                </NavLink>
                <p className='text-sm cursor-pointer'>{productData.price}</p>
            </div>
               
            <button className="w-8 h-8 hover:bg-[#f0f0f0] hover:text-gray-900 rounded-full ">
                <ShoppingCartIcon className="h-5 w-5 mx-auto"/>
            </button>
        </div>
            
    </div>

  )
}

export default ProductItem