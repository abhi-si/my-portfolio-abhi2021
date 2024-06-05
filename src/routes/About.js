import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectHome from '../Components/ProjectHome'

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="ABOUT" text="I am a passionate frontend developer"/>
      <Footer/>
    </div>
  )
}

export default About
