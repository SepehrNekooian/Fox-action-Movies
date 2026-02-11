import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Background_1 from '../../assets/Background.jpg'
import hero_title from '../../assets/x-series.png'
import play_icons from '../../assets/play.png'
import info_icons from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import Cards from '../../assets/Card/Cards'
import Question from '../../components/Question/Question'
import Cinema from '../../components/Cinema/Cinema'
import { Asked } from '../../components/Asked/Asked'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={Background_1} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer 
          service our store is a haven for those who appreciate quality, style, and innovation. </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icons} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icons} alt="" />More Info</button>
          </div>
        </div>
      </div>
      <Cards/>
      <div className="more-cards">
        <TitleCards title={"Popolar on Fox"} category={"top_rated"}/>
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
      </div>
      <Cinema/>
      <Asked/>
      <Question/>
      <Footer/>
      

    </div>
  )
}

export default Home