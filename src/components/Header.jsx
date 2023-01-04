import React from "react"
import myPic from "./images/david.jpg"
import emailIcon from "./images/email-Icon.png"

export default function Header(){
    return (
        <header className='header-container'>
            <img className='my-img' src={myPic} alt="David"/>
            <h1>David Riley</h1>
            <h3>Frontend Developer</h3>
            <a className='website' href="https://spontaneous-salamander-91570a.netlify.app">
                <p>My learning journal website</p>
            </a>
            <button className='email-btn'>
            <a href="mailto:dril112191@gmail.com?subject=SendMail&body=Description">
               <img className='email' src={emailIcon}/> 
               Email
            </a>
            </button>
            

        </header>
    )
}