import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Home from '../../Pages/Home/Home'


const Layout = () => {
  return (
    <>
      <Navbar/>
       <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout