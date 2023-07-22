import React from 'react'

interface ProductCardType{
    ImgContainerStyle?: string;
    ImgStyle?: string;
    productImg: string;
}

const ProductCard = ({ImgContainerStyle, ImgStyle, productImg}: ProductCardType) => {
  return (
    <div className={`w-full h-96 bg-[#f0f0f0] relative mb-4 ${ImgContainerStyle}`}>
         <img className={`w-4/5 m-auto absolute inset-0 transition duration-150 hover:scale-110 ${ImgStyle} `} src={productImg} alt="" />
    </div>
  )
}

export default ProductCard