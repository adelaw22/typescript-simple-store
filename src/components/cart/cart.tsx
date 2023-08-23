import React from 'react'
import CartItem from './cartItem'
import CustomBtn from '../customBtn'

const componentStyles ={
    hrStyle: "border-t-1 border-t-neutral-400",
}

const shopCart = () => {
  return (
    <div>
        <div className='flex justify-between'>
          <h3>Shopping cart</h3>
          <p>3 items</p>
        </div>

        <hr className={`${componentStyles.hrStyle}`}/>

        {/* Cart items */}
        <CartItem/>
        

        <div>
            <p>Total:</p>
            <p></p>
        </div>

        <CustomBtn>Checkout</CustomBtn>
    </div>
  )
}

export default shopCart