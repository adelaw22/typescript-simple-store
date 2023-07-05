import React from 'react'
import {Bars3BottomLeftIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <nav className="">
       <div className="container mx-auto flex justify-between h-16 py-4 items-center">
        <Bars3BottomLeftIcon className='h-5 w-5' />
        <span className='text-xl font-bold text-gray-900'>Blcwear.</span>
        
        <span className="w-10 h-10 flex items-center hover:bg-gray-100 rounded-full p-1 cursor-pointer ">
          <ShoppingBagIcon className='h-6 w-6 relative left-1 '/>
            <div className=" h-4 w-4  rounded-full bg-gray-900 text-white relative right-1 bottom-1.5 z-10 ">
              <p className='text-xs text-center'>0</p>
            </div>
            
        </span>
       </div>
    </nav>
  )
}

export default Navbar;

