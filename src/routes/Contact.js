import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectHome from '../Components/ProjectHome'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHome heading="CONTACT" text="Let's connect"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
