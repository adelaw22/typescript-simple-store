import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import ProductImg from '../assets/images/backpack.png'

const ProductItem = () => {
  return (
    <div className='md:w-3/12 mb-9'>
        <div className='w-full h-96 bg-gray-100 relative mb-4 '>
            <img className='w-4/5 m-auto absolute inset-0 transition duration-150 hover:scale-110 ' src={ProductImg} alt="" />
        </div>
        <div>
            <div className='flex justify-between items-center'>
                <span className="text-lg font-semibold">Product Name</span>
                <button className="w-8 h-8 hover:bg-gray-100 rounded-full ">
                    <ShoppingCartIcon className="h-5 w-5 mx-auto"/>
                </button>
            </div>
            <p className='text-sm'>$200.00</p>
        </div>
    </div>
  )
}

export default ProductItem

// rgb(236,236,236)