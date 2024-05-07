import React, { useEffect, useState } from 'react'
import PageContainer from '../PageContainer';
import { NavLink, Link } from "react-router-dom";
import { ShoppingBagIcon} from '@heroicons/react/24/outline'
import { useNavbar } from '../../hooks/useNavbar';

const componentStyling = {
    //Icon
    iconStyle: "h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer" ,
    //Link
    menuStyle: 'px-2 hover:border-b-4 hover:border-gray-900 text-gray-700 font-semibold hover:text-gray-900 hover:font-bold transition ease-in-out delay-150'
  }



const Navbar = () => {
  const {NavBg} = useNavbar()

  const menuItem = [
    {
      item:'Home',
      link: '/'
    },
    {
      item:'About',
      link: '/'
    },
    {
      item:'Contact',
      link: '/'
    },
    {
      item:'Shop',
      link: 'shop'
    },
  ]

  return (
    <nav className={`z-10 top-0  ${NavBg? 'sticky bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow' : 'bg-[#E9EAEB]'}`}>
       <PageContainer containerStyle="flex justify-between h-16 py-4 items-center">
       
       <NavLink to='/'>
          <span className='text-3xl font-bold text-gray-900'>Blcwr.</span>
       </NavLink>
        

        <div className="flex justify-between items-center">
          {menuItem.map((item, i)=>(
            <NavLink key={i} to={item.link} className='mx-5'>
              <span className={`${componentStyling.menuStyle}`}>{item.item}</span>
            </NavLink>
          ))}

          <NavLink to='/cart'>
          <span className="w-10 h-10 flex items-center p-1 cursor-pointer">
            <ShoppingBagIcon className={`relative left-1 ${componentStyling.iconStyle}`}/>
              <div className=" h-4 w-4  rounded-full bg-gray-900 text-white relative right-1 bottom-1.5 z-10 ">
                <p className='text-xs text-center'>0</p>
              </div>
              
          </span>
          </NavLink>
        </div>
       
       </PageContainer>
    </nav>
  )
}

export default Navbar;

