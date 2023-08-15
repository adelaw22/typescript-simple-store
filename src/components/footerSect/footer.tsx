import React from 'react'
import PageContainer from '../PageContainer'
import FooterLink from './footerLink'

const FooterStyle = {
  linkHeaderStyle: "text-xl font-bold mb-3" 
}

const infoLinks = ["About Us", "Blog", "Testimonials", "Events"]

const serviceLinks = ["Brands list", "Orders", "Return & Exchange", "Fashion list"] 

const footerSect = () => {
  return (
    <div className='w-full bg-[#DFDFDF] pt-16'>
      <PageContainer containerStyle='grid grid-cols-5 gap-x-8 [&>*:nth-child(1)]:col-span-2'>
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
          </div>

      </PageContainer>
    </div>
  )
}

export default footerSect