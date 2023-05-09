import React, { useState } from "react";
import Product from "./Product_list";
import Carts from "./Carting";
import { Cart2 } from "react-bootstrap-icons";
import './Home.css'

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showProductList, setShowProductList] = useState(true);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };


  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="Home">
      <div className="header">
        <h1>E-Site</h1>
        <div className="nav">
          <button onClick={() => setShowProductList(true)} className="btn-product">Products</button>
          <div className="cart-icon" onClick={() => setShowProductList(false)}>
            <Cart2  className="font-cart" />
            {cartItems.length > 0 && (
              <div className="cart-item-count">{cartItems.length}</div>
            )}
          </div>
        </div>
      </div>
    <div className="all-product">
     {showProductList ? (  
       <p className="para"> <Product  addToCart={addToCart} /></p>
      ) : (
        <Carts
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
      )}
    </div>
    </div>
  );
};

export default Home;
