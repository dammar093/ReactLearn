import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import "./Products.css";
import { CartProvider } from "../context/cartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [laoder, setLoader] = useState(false);
  const [carts,setCarts] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
     setTimeout(()=>{
      setLoader(true)
     },1000)
  },[]);

  const addToCart = (cart) => {
    setCarts((prevCarts) => [...prevCarts, cart]);
    console.log(carts); // Note: This console.log might not log the updated state immediately due to the asynchronous nature of setState
}



  const removeFromCart = () =>{

  }
  if(!laoder){

    return (
      <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src="https://i.gifer.com/ZKZg.gif" alt="" width={50} height={50} />
      </div>
      )
  }
  else{
    return (
      <CartProvider value={{carts ,addToCart , removeFromCart }}>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      </CartProvider>
    );
  }

};

export default Products;
