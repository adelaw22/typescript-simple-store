import React from 'react'
import SectionTemp from './sectiontemp'
import ladyimg from "../assets/images/ladyimg.png"

const DetailSection = () => {
  return (
    <>
       <SectionTemp sectionHeader='Feature Products' IndexOfFirstItem={0} lengthOfItems={4} />

       <div className='flex justify-center w-full h-80 bg-gradient-to-r from-[#F1F1F1] to-[#E7E7E7]'>
        <div className='flex'>
           <div className='self-center absolute z-10 text-center'>
            <p className='font-bold text-2xl'>THE TRENDS FOR THE SEASON</p>
          </div>
            <img className='relative text-center opacity-40 drop-shadow-2xl' src={ladyimg} alt=""/>
        </div>
       </div>

       <SectionTemp sectionHeader='New Products' IndexOfFirstItem={-4} />

    </>
  )
}

export default DetailSection