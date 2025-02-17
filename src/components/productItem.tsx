import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { productDataType } from '../types/global';
import ProductCard from './productCard';
import { formatCurrency } from '../lib/currencyFormat';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utilities/slices/cartSlice';
import { setSelectedProduct } from '../utilities/slices/productSlice';

interface ProductItemProps {
  productData: productDataType;
}

const ProductItem: React.FC<ProductItemProps> = ({ productData }) => {
  const dispatch = useDispatch()

  const handleAddToCart =(item : productDataType)=>{
      dispatch(addToCart({...item, quantity:1}))
  }
  
  return (
    <div className="w-full mb-9">
      <ProductCard productImg={productData.img} />

      <div className="flex justify-between items-center">
        <div>
          <Link to={`/product/${productData.id}`} onClick={() => dispatch(setSelectedProduct(productData))}>
            <p className="font-bold hover:text-gray-700 mb-2">{productData.productName}</p>
          </Link>
          <p className="text-sm font-semibold text-gray-500">{formatCurrency(productData.price)}</p>
        </div>

        <button onClick={()=>handleAddToCart(productData)} className="w-8 h-8 hover:bg-[#f0f0f0] hover:text-gray-900 rounded-full">
          <ShoppingCartIcon className="h-5 w-5 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
