import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt=''/>
            <img src={play_icon} className='play-icon' alt=''/>
        </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos aperiam, labore earum tempora atque numquam veniam, sit vitae quia repellendus expedita esse provident est vel sunt nisi quas! Dicta recusandae placeat sapiente! Deleniti iste, facilis officia quod consectetur laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloremque recusandae inventore nostrum dignissimos saepe corrupti illo excepturi quia perspiciatis?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem esse aspernatur tempora officiis molestiae qui. Beatae, dolores quae dolore rem quam ipsum cum? Quaerat, quasi molestias. Facilis laborum laboriosam mollitia?</p>

      </div>
    </div>
  )
}

export default About
