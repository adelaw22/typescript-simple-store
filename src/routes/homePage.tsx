import React from 'react'
import CtaCarousel from '../components/cta/ctaCarousel'
import DetailSection from '../components/detailSection'
import PageContainer from '../components/pageContainer'

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