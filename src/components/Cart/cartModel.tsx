import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import ReactPortal from '../ReactPortal'
import CustomBtn from '../customBtn';
import CartItem from './cartItem';
import { useNavbar } from '../../hooks/useNavbar';
import {CartState} from '../../utilities/slices/cartSlice'
import { formatCurrency } from '../../lib/currencyFormat';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const componentStyles = {
  hrStyle: "border-t-1 border-t-[#DADBE6] my-5",
}

interface CartModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({ isOpen, setIsOpen }: CartModalProps) => {
  const cartItems = useSelector((state: { cart: CartState }) => state.cart.cartItems);

   // Calculate total price
   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen &&
        <>
          <div className="fixed inset-0 flex justify-end z-50">
            <div className="bg-white h-screen w-2/5 p-5 relative flex flex-col">
              <div className='flex justify-between'>
                <div>
                  <p className="text-xl font-bold">Shopping cart</p>
                </div>

                <div onClick={closeModal}>
                  <XMarkIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                </div>
              </div>

              <hr className={componentStyles.hrStyle} />

              {/* Cart items */}
              <div className="flex-grow">
              {
                cartItems.length > 0 ? (
                  <>
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))
                    ) : (
                      <p>Your cart is empty</p>
                    )}
                  </>
                ):(
                  <></>
                )
              }
              </div>

              <div className='mt-auto'>
                <hr className={componentStyles.hrStyle} />

                <div className='flex justify-between'>
                  <p>Total :</p>
                  <p className='font-bold'>{formatCurrency(totalPrice)}</p>
                </div>
                <CustomBtn btnStyle='mt-5 px-16 py-3 mx-auto block'>Checkout</CustomBtn>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default CartModal
