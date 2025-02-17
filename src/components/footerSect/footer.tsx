import React from 'react'
import PageContainer from '../pageContainer'
import FooterLink from './footerLink'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

// component styles
const FooterStyle = {
  linkHeaderStyle: "text-xl font-bold mb-3", 
  iconStyle: "h-5 w-5 stroke-gray-700 stroke-2 me-2",

}

// link of arrays Footer  
const infoLinks = ["About Us", "Blog", "Testimonials", "Events"]

const serviceLinks = ["Brands list", "Orders", "Return & Exchange", "Fashion list"] 
const contactsLinks = [
  {
    icon :<DevicePhoneMobileIcon className={`${FooterStyle.iconStyle}`}/> ,
    content: "(+234)999-9999-999",
  },

  {
    icon :<EnvelopeIcon className={`${FooterStyle.iconStyle}`} /> ,
    content: "JohnDoe@mail.com",
  }
]


const footerSect = () => {
  return (
    <div className='w-full bg-[#DFDFDF] pt-16 pb-4'>
      <PageContainer>
        <div className='grid grid-cols-5 gap-x-8 [&>*:nth-child(1)]:col-span-2 mb-16'>
            <div>
                <span className='text-3xl font-bold text-gray-900 mb-4'>Blcwr.</span>
                <p className='text-base font-normal'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
            </div>

            {/* Information Links */}
            <FooterLink linkHeader="Information" linkItem={infoLinks}/>

            {/* Service Links */}
            <FooterLink linkHeader="Services" linkItem={serviceLinks}/>

            <div>
              <p className={FooterStyle.linkHeaderStyle}>Contact Us</p>

              {
                contactsLinks.map((item, i)=>(
                  <div className='flex mb-3' key={i}>
                    {item.icon}
                    <p className='text-base font-normal'>{item.content}</p>
                  </div>
                ))
              }
            </div>
        </div>
        
        <hr className='border-t-1 border-t-neutral-500 my-4'/>

        <div className='text-center'>
          <p className='text-sm'>2023@Renz.Ltd|All Right reserved</p>
        </div>
      </PageContainer>
    </div>
  )
}

export default footerSect