import React from 'react'
import './Cards.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'


const Cards = () => {
  
  return (
    
    <div className='card'>
      <div className='title'>
        <h1> New movies ➡  <span className='color'>2026</span></h1>
      </div>
          <div className="card-img">
            <img src={img1 } alt=""/>
            <img src={img2 } alt=""/>
            <img src={img3 } alt=""/>
          </div>

          <div className="card-img">
            <img src={img4 } alt=""/>
            <img src={img5 } alt=""/>
            <img src={img6 } alt=""/>
          </div> 
        </div>
  )
}


export default Cards