import {createContext,useContext} from 'react'

export const CartContext = createContext({
  carts:[
    {
      id:1,
      image:"https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price:1500,
      title:"Iphone 15"
    }
  ],
  addToCart:()=>{},
  removeFromCart:()=>{}
});

export const useCart=()=>{
  return useContext(CartContext)
}

export const CartProvider = CartContext.Provider;