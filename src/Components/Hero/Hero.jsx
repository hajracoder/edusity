import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Weensure better education for a better world </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni deserunt repudiandae nulla veritatis tempore libero obcaecati ipsa porro natus modi, amet magnam suscipit, rerum fugit asperiores in, quisquam blanditiis architecto vero. Neque eaque ex dolorem officiis doloremque rerum! Placeat.</p>
            <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
        </div>
      
    </div>
  )
}

export default Hero
