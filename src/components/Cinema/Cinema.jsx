import React from 'react'
import './Cinema.css'
import img_1 from '../../assets/IPIC.jpg'

const Cinema = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="about-content">
                <h4>About us</h4>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias maiores tenetur blanditiis illum 
                quisquam numquam soluta reiciendis id enim.</p>
                <button class="btn">Let's Talk Now</button>

            </div>
            <div className="about-image">
                <img src={img_1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cinema