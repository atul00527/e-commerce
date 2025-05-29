import React from 'react'
import './Hero.css'
import hand_icon from '../../../public/assets/hand_icon.png'
import arrow_icon from '../../../public/assets/arrow_icon.png'
// Importing images for the hero section
import men from '../../../public/assets/p8.webp'
// This is a Hero component that can be used to display a hero section on a webpage.



const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Best Deals!   best prises!</h2>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="hand icon" height="50px"/>
            </div>
            <p>Collection</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow_icon} alt="arrow icon" height="30px" />
        </div>
            
        </div>
        
        <div className='hero-right'>
          <img src={men} alt='' height="500px"/>
        </div>
    </div>

    
  )
}

export default Hero
