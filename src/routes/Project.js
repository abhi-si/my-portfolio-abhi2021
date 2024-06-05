import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectHome from '../Components/ProjectHome'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="PROJECTS" text="Some of my recent work"/>
      <Footer/>
    </div>
  )
}

export default Project
