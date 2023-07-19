import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import {MagnifyingGlassIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'


const Navbar = () => {
  const [NavBg, setNavBg] =useState(false)

  const transitionAction = {
    
  }

  const changeBg =()=>{
     if (window.scrollY >= 20){
        setNavBg(true)
     }else{ 
      setNavBg(false)
    }
  }

  useEffect(()=>{
    changeBg()
    window.addEventListener("scroll", changeBg)
  })


  return (
    <nav className="">
       <div className="container mx-auto flex justify-between h-16 py-4 items-center">
       
        <span className='text-4xl font-bold text-gray-900'>Blcwr.</span>
        

        <div className="flex justify-between items-center w-3/25">
          <NavLink to="/product" className="">
            <span className='text-gray-700 font-semibold hover:text-gray-900 hover:font-bold transition ease-in-out delay-150'>Shop</span>
          </NavLink>
          <MagnifyingGlassIcon className='h-6 w-6' />
          <span className="w-10 h-10 flex items-center hover:bg-gray-100 rounded-full p-1 cursor-pointer ">
            <ShoppingBagIcon className='h-6 w-6 relative left-1 '/>
              <div className=" h-4 w-4  rounded-full bg-gray-900 text-white relative right-1 bottom-1.5 z-10 ">
                <p className='text-xs text-center'>0</p>
              </div>
              
          </span>
        </div>
       
       </div>
    </nav>
  )
}

export default Navbar;

