import React from 'react'
import product  from './Store'
import './Product_list.css'

const Product_list = ({addToCart}) => {
  return (
    <div className='product-parent'>
      {
       product.map((items) => (
        <div key={items.id} className='product-list'>
            <img src={items.image} alt={"laptopimage"}></img> 
            <h2>{items.name}</h2>
           <span className='span'>${items.price}</span> <br/> <br/>
            <button onClick={() => addToCart(items)}>Add to Cart</button>
        </div>
       ))
      }
    </div>
  )
}

export default Product_list
