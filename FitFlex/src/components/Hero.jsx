import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Your Personal Fitness Companion</h5>
        </span>
        <h2><b>Stronger</b> Gyms, <b>Upgrade</b> Smarter Management</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero