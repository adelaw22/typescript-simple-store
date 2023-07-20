import React from 'react'


const CtaContent =({ctaData}: any)=> {

  return(  
      <div className='container mx-auto'>
          <div className='grid grid-cols-2'>
            <div className='self-center'>
              <div className='max-w-[85%]'>
                <p className='text-xl'>{ctaData.details}</p>
                <h1 className='text-5xl font-bold'>{ctaData.headline}</h1>
                <button>Shop now</button>
              </div>
            </div>

            <div className='mx-auto col-span-1'>
              <img src={ctaData.img} alt='' className='drop-shadow-2xl'/>
            </div>
          </div>
      </div>
  )
}

export default CtaContent