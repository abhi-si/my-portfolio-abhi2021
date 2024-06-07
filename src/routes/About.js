import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectHome from '../Components/ProjectHome'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="ABOUT" text="I am a passionate frontend developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
