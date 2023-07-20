import React from 'react'
import ProductItem from '../components/productItem'
import ProductData, {productDataType} from '../utilities/productsData' 


const ShopPage = () => {
  return (
    <div className="container mx-auto">
       <div className='grid gap-10 md:grid-cols-4'>
        {ProductData.map((product:productDataType)=>(
          <ProductItem key={product.id} productData={product}/>
        ))} 
      </div>
    </div>
   
  )
}

export default ShopPage