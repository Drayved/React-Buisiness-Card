import React from "react"
import gitHubIcon from "./images/GitHub-Icon.png"
import fbIcon from "./images/FacebookIcon.png" 
import linkedInIcon from "./images/Linkedin-Icon.png"

export default function Footer(){
    return (
     <footer className='footer-container'>
         <a href="https://www.facebook.com/david.riley.904">
             <img className='footer-img' src={fbIcon} alt="Facebook icon" />
         </a>
         <a href="https://github.com/Drayved">
             <img className='footer-img' src={gitHubIcon} alt="Github icon" />
         </a>
         <a href="https://www.linkedin.com/in/david-riley21/">
             <img className='footer-img' src={linkedInIcon} alt="Linkedin icon" />
         </a>
     </footer>
     )
 }