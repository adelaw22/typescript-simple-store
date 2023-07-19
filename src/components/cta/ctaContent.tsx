import React from 'react'

interface ctaData{
  id: number;
  img: string;
  headline: string;
  details: string;
}


const CtaContent =(carouselData: ctaData[])=> {
  return(  
   carouselData.map((cta)=>(
    <div key={cta.id}>
      <div className=''>
        <h1>{cta.headline}</h1>
        <p>{cta.details}</p>
        <button></button>
      </div>

      <div>
        <img src={cta.img} alt=''/>
      </div>

    </div>   
      )) 
  )
}

export default CtaContent