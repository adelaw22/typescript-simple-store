import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import {MagnifyingGlassIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'

const componentStyling = {
    //Icon
    iconStyle: "h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer" ,
  }


const Navbar = () => {
  const [NavBg, setNavBg] =useState<boolean>(false)

  const changeBg =()=>{
     if (window.scrollY >= 100){
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
    <nav className={`z-10 top-0  ${NavBg? 'sticky bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow' : ''}`}>
       <div className="container mx-auto flex justify-between h-16 py-4 items-center">
       
       <Link to='/'>
          <span className='text-3xl font-bold text-gray-900'>Blcwr.</span>
       </Link>
        

        <div className="flex justify-between items-center w-3/25">
          <NavLink to="/shop" className="">
            <span className='px-2 hover:border-b-4 hover:border-gray-900 text-gray-700 font-semibold hover:text-gray-900 hover:font-bold transition ease-in-out delay-150'>Shop</span>
          </NavLink>
          <MagnifyingGlassIcon className="h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer" />
          <span className="w-10 h-10 flex items-center p-1 cursor-pointer">
            <ShoppingBagIcon className='h-5 w-5 relative left-1 stroke-gray-700 stroke-2 '/>
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

