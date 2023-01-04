import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'


function Header(){
    return (
        <header className='header-container'>
            <img className='my-img' src="images/David.jpg" alt="" width="800px"/>
            <h1>David Riley</h1>
            <h3>Frontend Developer</h3>
            <a className='website' href="https://spontaneous-salamander-91570a.netlify.app">
                <p>My learning journal website</p>
            </a>
            <button className='email-btn'>
            <a href="dril112191@gmail.com">
               <img className='email' src="images/email-icon.png"/> 
               Email
            </a>
            </button>
            

        </header>
    )
}

function Main(){
    return (
        <div className='main-container'>
            <div>
                <h2 className='title'>About</h2>
                <p className='main-text'>I am a self taught frontend developer that has been involved with the tech world
                    for 15 years personally, and 10 years professionally. I decided in 2022 that I 
                    wanted to learn how to code and have been loving the journey so far and can'
                    wait to see where it takes me
                </p>
            </div>
            <div>
                <h2 className='title'>Interests</h2>
                <p className='main-text'>Music lover. Gamer. Convention connoisseur. Dog lover. Part of the learners for life crew. 
                    Flow artist. Coding. Hat lover. Reader.
                </p>
            </div>
        </div>
    )
}

function Footer(){
   return (
    <footer className='footer-container'>
        <a href="https://www.facebook.com/david.riley.904">
            <img className='footer-img' src="images/FacebookIcon.png" alt="Facebook icon" />
        </a>
        <a href="https://github.com/Drayved">
            <img className='footer-img' src="images/GitHub-Icon.png" alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/david-riley21/">
            <img className='footer-img' src="images/Linkedin-Icon.png" alt="Linkedin icon" />
        </a>
    </footer>
    )
}
ReactDOM.render(
    <div>
        <Header />
        <Main />
        <Footer/> 
    </div>,
document.getElementById("root"))