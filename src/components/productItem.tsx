import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
// import { productDataType } from '../utilities/productsData'
import ProductCard from './productCard'


const ProductItem = ({productData}:any) => {
  return (
    <div className='w-full mb-9'>
        <ProductCard productImg={productData.img} />
       
       
        <div className='flex justify-between items-center'>
            <div>
                <Link to='/product'> 
                    <p className="font-bold mb-1 hover:text-gray-700 mb-2">{productData.productName}</p>
                </Link>
                <p className='text-sm font-semibold text-gray-500'>{productData.price}</p>
            </div>
               
            <button className="w-8 h-8 hover:bg-[#f0f0f0] hover:text-gray-900 rounded-full ">
                <ShoppingCartIcon className="h-5 w-5 mx-auto"/>
            </button>
        </div>
            
    </div>

  )
}

export default ProductItem