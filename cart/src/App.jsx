import {createBrowserRouter , createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout' 
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/cartContext'
import { useState } from 'react'
function App() {

const [carts,setCarts]=useState([])

 const router = createBrowserRouter(

  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
       <Route path='/' element={<Products/>}/>
       <Route path='cart' element={<Cart/>}/>
   </Route>
  )
 )

 const addToCart = (cart) => {
  setCarts((prevCarts) => [...prevCarts, cart]);
  console.log(carts); // Note: This console.log might not log the updated state immediately due to the asynchronous nature of setState
}



const removeFromCart = (id) =>{
    carts.filter((cart)=>setCarts((cart)=> cart.id != id))
}

  return (
    <CartProvider value={{carts,addToCart,removeFromCart}}>
     <RouterProvider router={router}/>
    </CartProvider>
  )
}

export default App
