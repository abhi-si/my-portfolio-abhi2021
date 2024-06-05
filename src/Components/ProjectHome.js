import "./ProjectHomeStyle.css"


import React from 'react'
// In a functional component, you don't have access to this.props. Instead, you should use the props object that is passed as an argument to the component function
const ProjectHome = (props) => {
  return (
    <div className="project-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
      
    </div>
  )
}

export default ProjectHome
