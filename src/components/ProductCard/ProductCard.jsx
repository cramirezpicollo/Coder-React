import React from 'react'
import ProductoButton from '../ProductButton/ProductButton'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductImg from '../ProductImg/ProductImg'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className ='card'>
        <ProductImg/>
        <ProductInfo/>
        <ProductoButton/>
        
    </div>
  )
}

export default ProductCard