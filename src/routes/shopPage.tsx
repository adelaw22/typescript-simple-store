import React from 'react'
import ProductItem from '../components/productItem'
import data from '../utilities/productsData' 

interface ProductItemType{
  id: number;
  productName: string;
  price: string;
  description: string;
  img: string;
  isAvailable: boolean;
}

const ShopPage = () => {
  return (
    <div className='grid gap-10 md:grid-cols-4'>
      {data.map((product:ProductItemType)=>(
        <ProductItem key={product.id} productData={product}/>
      ))} 
    </div>
  )
}

export default ShopPage