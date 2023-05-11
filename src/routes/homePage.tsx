import React from 'react'
import ProductItem from '../components/productItem'
import data from '../utilities/productsData.json' 

interface ProductItemType{
  id: number;
  productName: string;
  price: string;
  description: string;
  img: string;
  isAvailable: boolean;
}

const HomePage = () => {
  return (
    <div>
      {data.map((product:ProductItemType)=>(
        <ProductItem key={product.id} data ={product}/>
      ))} 
    </div>
  )
}

export default HomePage