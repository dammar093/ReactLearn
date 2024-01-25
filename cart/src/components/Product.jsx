import React, { useState } from 'react'
import './Product.css'
import { useCart } from '../context/cartContext'

const Product = ({product}) => {
   const [carts,setCarts] = useState([])
   const {addToCart} = useCart() 

  const addProduct =(cart)=>{
     addToCart({id:cart.id,image:cart.image,price:cart.price,title:cart.title})
  }
  return (
    <div className='product'>
       <div className="image">
       <img src={product.image} alt={product.title} />
       </div>
       <div className="details">
          <h2>{product.title}</h2>
          <p>{product.price}$</p>
       </div>
       <button onClick={()=>addProduct(product)}>Add to Cart</button>
    </div>
  )
}

export default Product