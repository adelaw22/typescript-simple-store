import React from 'react'
import CustomBtn from '../components/customBtn'
import Joggers from '../assets/images/fur-coat.png'

const ProductPage = () => {
  return (
    <div className="container mx-auto">
      <div className='grid grid-cols-2 gap-8  mx-auto  '>
        <div className='w-full h-120 bg-[#f0f0f0] relative  '>
          <img className='w-2/5 m-auto absolute inset-0 transition duration-150 hover:scale-110' src={Joggers} alt=''/>
        </div>
        <div>
        
              <h3 className='text-2xl font-semibold mb-4'>OlbeXnike Vans</h3>
                <p className='text-base text-gray-900 mb-4'>In do laborum anim labore nisi magna nostrud non velit excepteur labore id amet. Deserunt consequat quis et Lorem enim amet sint tempor. Officia deserunt sint mollit nulla. Voluptate minim voluptate et sint enim cupidatat dolor amet in nulla tempor. Sint magna sunt et excepteur nostrud excepteur. Voluptate ad ipsum quis duis ex laborum nisi duis labore aliqua nisi eiusmod quis. Amet ex non excepteur velit eu magna occaecat ut.</p>
              <p className='text-base text-gray-900 mb-16'>Price:<b> $200.00</b></p>
      

          <CustomBtn btnStyle='px-16 py-3'>Add to Cart</CustomBtn>
        </div>
      </div>
    </div>
  )
}

export default ProductPage