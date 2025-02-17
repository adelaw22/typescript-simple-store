import React from 'react';
import ProductItem from '../components/productItem';
import ProductData from '../utilities/productsData';

const ShopPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <p className='text-2xl font-bold mt-24 text-center'>Products</p>
      <div className="grid gap-10 md:grid-cols-4 pb-28 pt-12">
        {ProductData.map((product) => (
          <ProductItem key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
