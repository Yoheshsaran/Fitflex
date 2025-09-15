import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/dumbblls2.jpg'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Our Story, Your Strength.. </h3>
          <p>We’re not just building bodies—we’re building confidence, resilience, and community. Every journey has a story, and we’re here to make yours stronger. From cutting-edge equipment to expert coaching and an uplifting environment, everything we do is designed to help you reach your potential. Every rep brings progress, and every step forward brings you closer to your best self. Together, we turn goals into achievements and strength into a way of life.</p>
      </div>

    </div>
  )
}

export default About