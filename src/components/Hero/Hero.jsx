import React from 'react'
import './Hero.css'
import handicon from '../assets/hand_icon.png'
import arrowicon from '../assets/arrow.png'
import heroimg from '../assets/hero_image.png'


const Hero = () => {
  return (
       <div className="hero">
            <div className='hero-left'>
                <h2>New Arrival</h2>
                <div className="">
                    <div className='hand-icon'>
                        <p>New</p>
                        <img src={handicon} alt=''></img>
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <p>Latest Collection </p>
                    <img src={arrowicon} alt=""/>
                </div>

            </div>
            <div className="hero-right">
                <img alt= '' src={heroimg}></img>

            </div>
       </div>
    
  )
}

export default Hero