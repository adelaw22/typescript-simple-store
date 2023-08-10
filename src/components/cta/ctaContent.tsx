import React from 'react'
import { Link } from 'react-router-dom'
import CustomBtn from '../customBtn'



const CtaContent =({ctaData}: any)=> {

  return(  
      <div className='container mx-auto'>
          <div className='grid grid-cols-2'>
           
              <div className='max-w-[85%] self-center justify-self-end'>
                <p className='text-xl'>{ctaData.details}</p>
                <h1 className='text-5xl font-bold'>{ctaData.headline}.</h1>
                <Link to='/shop'>
                    <CustomBtn btnStyle='mt-4 px-16 py-3'>Shop now</CustomBtn>
                </Link>
              
            </div>

            <div className='mx-auto col-span-1'>
              <img src={ctaData.img} alt='' className='drop-shadow-2xl'/>
            </div>
          </div>
      </div>
  )
}

export default CtaContent