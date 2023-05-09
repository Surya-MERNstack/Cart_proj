import React from 'react'
import './Carting.css'
const Carts = (props) => {
 
  const totalPrice = props.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div >
     <h2 className='h2'><u>Your Cart</u></h2>
    
    {props.cartItems.length === 0 && <p className='para-cart'>YourCart is Empty...</p>} 
     {props.cartItems.map((items) => (
      <div key={items.id} className='cart-name'>
          <h3 className='heading'><u>{items.name}</u></h3>
          <p>{items.age}</p>
          <p>{items.price} $ x {items.quantity}</p>
          <button onClick={() => props.removeFromCart(items.id)}>Remove</button>
      </div>
     ))}  
   
     
     {
      props.cartItems.length > 0 && (
        <>
        <hr/>
        <p className='total'>Total Price : {totalPrice} $</p>
        </>
      )
     }
    </div>
    
  )
}

export default Carts;

