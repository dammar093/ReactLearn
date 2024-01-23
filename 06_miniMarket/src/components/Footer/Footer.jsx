import React from 'react'
import './Footer.scss'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Men</span>
          <span>Women</span>
          <span>Kid</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius id odio, aspernatur aut quaerat voluptates accusamus autem! Vitae, exercitationem deleniti.
          </span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maiores consequatur perspiciatis cumque explicabo optio voluptas! Deleniti eius ipsum vel?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>MINIMARKET</span>
          <span className='copyright'>©2024 All right reserved to MINIMARKET</span>
        </div>
        <div className="right">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JxA2bOhnD1cRUlWaL99g5mCMsXwBKLNomA&usqp=CAU" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer