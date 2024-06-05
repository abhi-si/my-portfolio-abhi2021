import "./FooterStyle.css"
import { FaHome ,FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    
                     <p>
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                           Harishankari , Ghazipur(U.P.)
                            , India 
                     </p>
                     
                        
                    
                     <div className="phone">
                     <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>7275569727</h4>
                     </div>
                     <div className="email">
                     <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>abhisheksingh969646@gmail.com</h4>
                     </div>
                </div>

            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is Abhishek Singh. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    
                    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                     <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                     <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                     
                     
                
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
