import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './productCard'
import CustomBtn from './customBtn'

import ProductData, {productDataType} from '../utilities/productsData' 

interface ISectionTemp{
    sectionHeader: string;
    IndexOfFirstItem?: number;
    lengthOfItems?: number;
}

const SectionTemp = ({sectionHeader, IndexOfFirstItem, lengthOfItems}: ISectionTemp) => {
  return (
    <div className='my-16'>
        <div className='text-center mb-8'>
            <p className='text-2xl font-bold'>{sectionHeader}</p>
        </div>
        
        <div className='grid gap-8 md:grid-cols-4'>
            {
                ProductData.slice(IndexOfFirstItem, lengthOfItems).map((product:productDataType)=>(
                    <div key={product.id}>
                        <ProductCard productImg={product.img}/>
                        <div className='text-center'>
                                <Link to="/product">
                                  <p className='font-bold mb-1 hover:text-gray-700'>{product.productName}</p>
                                </Link>
                                <p className='text-sm font-semibold text-gray-500'>{product.price}</p>

                                <CustomBtn btnStyle='py-2 px-5 text-sm mt-2'> Add to Cart </CustomBtn>
                        </div>
                    </div>
                ))
            }
            
        </div>
        
       
    </div>
  )
}

export default SectionTemp