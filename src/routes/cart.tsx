import React from 'react';
import PageContainer from '../components/PageContainer';
import CartItem from '../components/Cart/cartItem';
import CustomBtn from '../components/customBtn';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; 

const componentStyles = {
  hrStyle: "border-t-1 border-t-neutral-400",
};

const ShopCart = () => {
  // Retrieve cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // Calculate total price
  // const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);


  return (
    <PageContainer>
      <div className='flex justify-between'>
        <div>
          <p className="text-xl font-bold">Shopping cart</p>
        </div>
      </div>

      <hr className={componentStyles.hrStyle} />

      {/* Render cart items */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <div className='flex justify-between mt-4'>
        <p className='text-lg font-bold'>Total:</p>
        {/* <p className='text-lg font-bold'>${totalPrice}</p> */}
      </div>

      <CustomBtn>Checkout</CustomBtn>
    </PageContainer>
  );
};

export default ShopCart;
