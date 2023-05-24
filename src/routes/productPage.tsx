import React from 'react'
import Joggers from '../assets/images/louboutin.png'

const ProductPage = () => {
  return (
    <div className='grid grid-cols-2 gap-8 md:w-5/6 mx-auto  '>
      <div className='w-full h-96 bg-gray-100 '>
        <img className='w-6/12 mx-auto' src={Joggers} alt=''/>
      </div>
      <div>
        <h3 className='text-2xl font-semibold'>OlbeXnike Vans</h3>
        <p className='text-justify text-base text-gray-900'>In do laborum anim labore nisi magna nostrud non velit excepteur labore id amet. Deserunt consequat quis et Lorem enim amet sint tempor. Officia deserunt sint mollit nulla. Voluptate minim voluptate et sint enim cupidatat dolor amet in nulla tempor. Sint magna sunt et excepteur nostrud excepteur. Voluptate ad ipsum quis duis ex laborum nisi duis labore aliqua nisi eiusmod quis. Amet ex non excepteur velit eu magna occaecat ut.</p>
       <p><b>Price:</b> $200.00</p>
      </div>
    </div>
  )
}

export default ProductPage