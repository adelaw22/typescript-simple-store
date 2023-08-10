import React from 'react'


const AdBanner = ({data}: any) => {
  return (
    <div className={`bg-[${data.color}] w-full`}>
        <p></p>
        <img className='' src={data.img}/>
    </div>
  )
}

export default AdBanner