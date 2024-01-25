import React, { useState } from "react";
import "./Cart.css";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const { carts } = useCart();
  

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    console.log(carts);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="cart">
      {carts.map((cart) => (
        <div className="cartItems" key={Date.now()}> {/* Corrected key attribute */}
          <img src={cart.image} alt="" />
          <h2>{cart.title}</h2>
          <button onClick={decreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
          <p>${cart.price}</p>
          <button className="remove" >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
