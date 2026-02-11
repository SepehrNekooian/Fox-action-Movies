import React from 'react'
import './Footer.css'
import play_youtube from '../../assets/icons/square-instagram-brands-solid.svg'
import play_youtube_1 from '../../assets/icons/youtube-brands-solid.svg'
import play_youtube_2 from '../../assets/icons/telegram-brands-solid.svg'
import play_youtube_3 from '../../assets/icons/square-whatsapp-brands-solid.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={play_youtube} alt=""/>
        <img src={play_youtube_1} alt=""/>
        <img src={play_youtube_2} alt=""/>
        <img src={play_youtube_3} alt=""/>
      </div>
      <ul>
        <li>Payment</li>
        <li>FAQ</li>
        <li>Logistics Inquiry</li>
        <li>Shopping Cart</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Shipping & Returns</li>
        <li>Privacy Notice</li>
        <li>DMCA Takedown</li>
        <li>Store</li>
        <li>Tv Shows</li>
        
      </ul>
      <p className='copyright-text'>2013-2025 Sepehr Nekooian, Inc</p>

    </div>
  )
}

export default Footer