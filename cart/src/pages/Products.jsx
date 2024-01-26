import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import "./Products.css";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [laoder, setLoader] = useState(false);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
     setTimeout(()=>{
      setLoader(true)
     },1000)
  },[]);


  if(!laoder){

    return (
      <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src="https://i.gifer.com/ZKZg.gif" alt="" width={50} height={50} />
      </div>
      )
  }
  else{
    return (
      <>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      </>
    );
  }

};

export default Products;
