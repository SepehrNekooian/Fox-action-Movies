import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Search from '../../assets/Search...svg'
import Search_2 from '../../assets/profile.svg'
import Search_3 from '../../assets/user-solid.svg'
import Search_4 from '../../assets/arrow_drop.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
      <div className="navber-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>BEST SELLERS</li>
          <li>NEW ARRIVALS</li>
          <li>Hot Sale</li>
          <li>Shopping Cart</li>
        </ul>
      </div>
      <div className="navber-right">
        <img src={Search} alt="" className='icons'/>
      <p>Search</p>
      <img src={Search_2} alt="" className='icons'/>
      
      
      <div className="navber-profile">
        <img src={Search_3} alt="" className='profile'/>
        <img src={Search_4} alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign out of sepehr</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar