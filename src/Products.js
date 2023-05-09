import React from 'react'

const Products = ({ product ,addToCart}) => {
  return (
    <div>
       <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <img src={product.image} alt={image}></img> <br/>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
       </div>
    </div>
  )
}

export default Products
