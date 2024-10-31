import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import BackPack from "../../assets/images/backpack.png"; // Replace with dynamic image if needed
import { componentStyles } from './cartModel';
import CustomBtn from '../customBtn';
import { CartItem as CartItemType } from '../../types/global';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../utilities/slices/cartSlice';
import { formatCurrency } from '../../lib/currencyFormat';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <>
      <div className='flex mt-3 mb-2'>
        <div className='flex'>
          <div className='bg-[#EBECF2] w-[6rem] p-3 rounded-md'>
            <img src={item.img} alt={item.productName} className='w-full object-contain' />
          </div>

          <div className="ml-4 flex flex-col pt-2">
            <p className='font-semibold text-[18px]'>{item.productName}</p>

            <div className='mt-2 flex items-center'>
              <CustomBtn onClick={handleDecrement}>-</CustomBtn>
              <span className='mx-3'>{item.quantity}</span>
              <CustomBtn onClick={handleIncrement}>+</CustomBtn>
            </div>
          </div>
        </div>

        <div className='pt-2 ml-auto flex flex-col'>
          <p>{formatCurrency(item.price)}</p>
          <div className='mt-auto ml-auto'>
            <TrashIcon 
              className='h-4 w-4 stroke-gray-700 stroke-2 cursor-pointer' 
              onClick={handleRemove} 
            />
          </div>
        </div>
      </div>
      <hr className={componentStyles.hrStyle} />
    </>
  );
};

export default CartItem;
