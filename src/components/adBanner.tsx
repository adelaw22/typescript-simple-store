import React from 'react'


const AdBanner = ({data}: any) => {
  return (
    <div className={`bg-[${data.color}] w-full flex justify-between`}>
        <div>
          <div>New {data.productItem}</div>
          <p>50% off</p>
        </div>
        <div>
          <img className='' src={data.img}/>
        </div>
    </div>
  )
}

export default AdBanner