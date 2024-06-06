import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectHome from '../Components/ProjectHome'
import Work from '../Components/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="PROJECTS" text="Some of my recent work"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
