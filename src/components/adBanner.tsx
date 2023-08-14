import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const componentStyling = {
  //Icon
  iconStyle: "h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer" ,
}

const AdBanner = ({data}: any) => {
  return (
    <div className={`bg-[#E3E4DF] w-full flex justify-between items-center px-5`}>
        <div className=''>
          <h2 className='text-2xl mb-2'>New {data.productItem} Up 50% Off</h2>

          <Link to='' className='flex gap-x-1 items-center'> 
            <p>Shop Now</p>
            <ArrowLongRightIcon className={`${componentStyling.iconStyle}`}/>
          </Link>
        </div>        
        <div>
          <img className='' src={data.img}/>
        </div>
    </div>
  )
}

export default AdBanner