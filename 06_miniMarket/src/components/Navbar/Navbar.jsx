import React from "react";
import "./Navbar.scss";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Search from '@mui/icons-material/Search'
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined'
import PersonOutline from '@mui/icons-material/PersonOutline'
import CartTravelOutlined from '@mui/icons-material/CardTravelOutlined'
import Language from '@mui/icons-material/Language'
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
           <div className="items">
              <Language/>
              <KeyboardArrowDown/>
            </div>
            <div className="items">
              <span>usd</span>
              <KeyboardArrowDown/>
            </div>
            <div className="items">
              <NavLink to='/products/1' className='link'>
              Men
              </NavLink>
            </div>
            <div className="items">
              <NavLink to= '/products/2' className='link'>
              Women
              </NavLink>
            </div>
            <div className="items">
              <NavLink to='/products/3' className= 'link'>
              Kid
              </NavLink>
            </div>
            <div className="items">
              <NavLink to='#' className= 'link'>
              Accessories
              </NavLink>
            </div>
        </div>
        <div className="center">
            <NavLink className="link" to='/'>
            <h2>MINIMARKET</h2>
            </NavLink>
        </div>
        <div className="right">
            <div className="items">
              <NavLink to= '#' className= 'link'>
              Home
              </NavLink>
            </div>
            <div className="items">
              <NavLink to= '#' className= 'link'>
              About
              </NavLink>
            </div>
            <div className="items" >
              <NavLink to= '#' className= 'link'>
              Contact
              </NavLink>
            </div>
            <div className="items">
              <NavLink to= '#' className= 'link'>
               Store
              </NavLink>
            </div>
            <div className="icons">
              <Search/>
              <PersonOutline/>
              <FavoriteOutlined/>
            </div>
            <div className="cart">
              <CartTravelOutlined/>
              <span>0</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
