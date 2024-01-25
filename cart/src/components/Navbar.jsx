import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navBar'>
         <NavLink
          to="/"
          className="link"
         >
          Products
         </NavLink>

         <NavLink
          to="/cart"
          className="link"
         >
          Cart
         </NavLink>
    </div>
  )
}

export default Navbar