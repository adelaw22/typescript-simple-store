import React from 'react'
import Joggers from '../assets/images/fur-coat.png'

const ProductPage = () => {
  return (
    <div className='grid grid-cols-2 gap-8  mx-auto  '>
      <div className='w-full h-96 bg-gray-100 relative  '>
        <img className='w-2/5 m-auto absolute inset-0 transition duration-150 hover:scale-110' src={Joggers} alt=''/>
      </div>
      <div>
      
            <h3 className='text-2xl font-semibold mb-4'>OlbeXnike Vans</h3>
              <p className='text-base text-gray-900 mb-4'>In do laborum anim labore nisi magna nostrud non velit excepteur labore id amet. Deserunt consequat quis et Lorem enim amet sint tempor. Officia deserunt sint mollit nulla. Voluptate minim voluptate et sint enim cupidatat dolor amet in nulla tempor. Sint magna sunt et excepteur nostrud excepteur. Voluptate ad ipsum quis duis ex laborum nisi duis labore aliqua nisi eiusmod quis. Amet ex non excepteur velit eu magna occaecat ut.</p>
            <p className='text-base text-gray-900 mb-16'>Price:<b> $200.00</b></p>
    

        <button className='px-16 py-3 bg-neutral-950 hover:bg-neutral-800 text-neutral-50 text-base'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPage