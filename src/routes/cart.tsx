import React from 'react'
import PageContainer from '../components/PageContainer'
import CartItem from '../components/cartItem'
import CustomBtn from '../components/customBtn'

const componentStyles ={
    hrStyle: "border-t-1 border-t-neutral-400",
}

const shopCart = () => {
  return (
    <PageContainer>
        <div className='flex justify-between'>
          <div>
            <p className="text-xl font-bold">Shopping cart</p>
            <p>0 item</p>
          </div>
        </div>

        <hr className={componentStyles.hrStyle}/>

        {/* Cart items */}
        <CartItem/>
        

        <div>
            <p>Total:</p>
            <p></p>
        </div>

        <CustomBtn>Checkout</CustomBtn>
    </PageContainer>
  )
}

export default shopCart