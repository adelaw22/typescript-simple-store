import React from 'react'
import SectionTemp from './sectiontemp'
import ladyimg from "../assets/images/ladyimg.png"
import AdBanner from './adBanner'
import AdGlass from "../assets/images/adGlasses.png"
import AdShirt from "../assets/images/adShirt.png"

interface adType{
  img: string;
  color: string;
}

const AdData: adType[] =[
  {
    img:AdShirt,
    color:"#E3E4DF"
  },
  {
    img:AdGlass,
    color:"#D7D7D9"
  }
]

const DetailSection = () => {
  return (
    <>
       <SectionTemp sectionHeader='Feature Products' IndexOfFirstItem={0} lengthOfItems={4} />

       <div className='flex justify-center w-full h-80 bg-gradient-to-r from-[#F1F1F1] to-[#E7E7E7]'>
        <div className='flex'>
           <div className='self-center absolute z-1 text-center'>
            <p className='font-bold text-2xl'>THE TRENDS FOR THE SEASON</p>
          </div>
            <img className='relative text-center opacity-40 drop-shadow-2xl' src={ladyimg} alt=""/>
        </div>
       </div>
       <div className='grid gap-8 grid-cols-2'>
        {
          AdData.map((item: adType,i)=>(
            <AdBanner key={i} data={item}/>
          ))
        }
          
       </div>

       <SectionTemp sectionHeader='New Products' IndexOfFirstItem={-4} />

    </>
  )
}

export default DetailSection