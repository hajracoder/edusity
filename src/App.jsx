import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' Title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' Title='Campus photo'/>
      <Campus/>
      <Title subTitle='Testimonials' Title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact us' Title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
