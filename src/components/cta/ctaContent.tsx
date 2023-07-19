import React from 'react'


const CtaContent =(ctaData: any)=> {

  console.log(ctaData)

  return(  
  
    <div key={ctaData.id}>
      <div className=''>
        <h1>{ctaData.headline}</h1>
        <p>{ctaData.details}</p>
        <button></button>
      </div>

      <div>
        <img src={ctaData.img} alt=''/>
      </div>

    </div>   
 
  )
}

export default CtaContent