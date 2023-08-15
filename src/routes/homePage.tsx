import React from 'react'
import CtaCarousel from '../components/cta/ctaCarousel'
import DetailSection from '../components/detailSection'
import PageContainer from '../components/PageContainer'

const HomePage =()=> {
  return (
    <>
      <CtaCarousel/>

      <PageContainer>
         <DetailSection/>
      </PageContainer>  
    </>
  )
}

export default HomePage