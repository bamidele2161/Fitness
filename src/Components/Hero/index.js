import React from 'react'
import './hero.css'
import { IoLogoApple } from 'react-icons/io5'
import AOS from 'aos'
import 'aos/dist/aos.css';
import image from '../../images/hero-img.png'
const Hero = () => {
    AOS.init({
        duration: 2000,
    })
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1 className="heading">Start Your Challenge</h1>
                <h2 className="small-heading">Make Your Body Stronger</h2>
                <p className="left-paragraph">Challenge friends and family. <br/> Build your own, set unique goals, and complete tasks.</p>
                
                <button className="apple-logo-hero"><IoLogoApple className="hero-apple-logo"/>Download App</button>
            </div>
            <div className="hero-right">
                <img src={image} className="hero-image" alt="Hero-pic" data-aos='fade-left'/>
            </div>
        </div>
    )
}

export default Hero
