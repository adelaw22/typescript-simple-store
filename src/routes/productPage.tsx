import React from 'react'
import CustomBtn from '../components/customBtn'
import PageContainer from '../components/PageContainer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../utilities/slices/cartSlice'
import { productDataType } from '../types/global'
import { formatCurrency } from '../lib/currencyFormat'
import BackBtn from '../components/backBtn'

const ProductPage = () => {
  const product :productDataType  = useSelector((state: any) => state.product.selectedProduct)
  const dispatch = useDispatch()

  const handleAddToCart =(item : productDataType)=>{
      dispatch(addToCart({...item, quantity:1}))
  }

  return (
    <PageContainer>
      <div className='my-24'>
        <BackBtn/>
        <div className='grid grid-cols-2 gap-8 mt-5'>
          <div className='w-full h-120 bg-[#f0f0f0] relative  '>
            <img className='w-2/5 m-auto absolute inset-0 transition duration-150 hover:scale-110' src={product.img} alt=''/>
          </div>

          <div className='flex'>
            <div className='self-center'>
              <h3 className='text-2xl font-semibold mb-4'>{product.productName}</h3>
                      <p className='text-base text-gray-900 mb-4'>{product.description}</p>
                    <p className='text-base text-gray-900 mb-16'>Price:<b> {formatCurrency(product.price)}</b></p>
            

                <CustomBtn onClick={()=>handleAddToCart(product)} btnStyle='px-16 py-3'>Add to Cart</CustomBtn>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default ProductPage