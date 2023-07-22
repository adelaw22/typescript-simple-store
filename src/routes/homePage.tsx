import React from 'react'
import CtaCarousel from '../components/cta/ctaCarousel'
import DetailSection from '../components/detailSection'

const HomePage =()=> {
  return (
    <>
      <CtaCarousel/>

      <div className='container mx-auto my-6'>
         <DetailSection/>
      </div>  
    </>
  )
}

export default HomePage