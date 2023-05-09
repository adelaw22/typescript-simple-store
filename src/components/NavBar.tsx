import React from 'react'
import {Bars3BottomLeftIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <nav className="flex justify-between h-16 py-4 items-center">
        <Bars3BottomLeftIcon className='h-5 w-5' />
        <span className='text-xl font-bold'>Blacwear.</span>
        
        <span className="w-9 h-9 flex items-center text-white bg-black rounded-full p-1.5">
          <ShoppingBagIcon className='h-4 w-4'/>
            <p className='text-xs -mt-2'>0</p>
        </span>
    </nav>
  )
}

export default Navbar;

