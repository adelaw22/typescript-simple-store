import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const EmptyCart = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <ShoppingCartIcon className='h-10 w-10 text-gray-700 mx-auto'/>
      <p> Your cart is empty</p>
    </div>
  )
}

export default EmptyCart