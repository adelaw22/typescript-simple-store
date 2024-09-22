import React from 'react';
import ProductItem from '../components/productItem';
import ProductData from '../utilities/productsData';

const ShopPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-10 md:grid-cols-4 py-28">
        {ProductData.map((product) => (
          <ProductItem key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
