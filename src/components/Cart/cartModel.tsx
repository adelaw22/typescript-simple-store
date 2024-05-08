import React from 'react'
import ReactPortal from '../ReactPortal'
import CustomBtn from '../customBtn';
import CartItem from './cartItem';
import { useNavbar } from '../../hooks/useNavbar';

// interface CartModalProps{
//   title?: string;
// }
const componentStyles ={
  hrStyle: "border-t-1 border-t-neutral-400",
}

interface CartModalProps{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal=({ isOpen, setIsOpen }:CartModalProps)=> {

  
  const closeModal = ()=>{
    setIsOpen(false)
}

  return (
   <>
    {isOpen &&
        <> 
        <div  className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white">
            <div className='flex justify-between'>
                <div>
                  <p className="text-xl font-bold">Shopping cart</p>
                  <p>0 item</p>
                </div>

                <div onClick={closeModal}></div>
              </div>

              <hr className={componentStyles.hrStyle}/>
                {/* Cart items */}
                <CartItem/>

                <div className='position-sticky bottom-0'>
                    <div className='flex justify-between'>
                      <p>Total:</p>
                      <p></p>
                    </div>
                    <CustomBtn>Checkout</CustomBtn>
                </div>

                
          </div>
        </div>
      </>
   }
   </>
  )
}

export default CartModal