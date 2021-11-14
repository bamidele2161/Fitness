import React from 'react'
import './explore.css'
import image from '../../images/pushup.png'
import muscle from '../../images/muscle.png'
import fit from '../../images/fit.png'
import power from '../../images/power.png'
import { TiTick, TiFlash } from 'react-icons/ti'
import { IoLogoApple } from 'react-icons/io5'
import AOS from 'aos';
const Explore = () => {
    AOS.init({
        duration: 1000,
    })
    return (
        <div className="landing-explore">
            <div className="explore-container">
                <div className="explore-text">
                    <h2 className="explore-heading">Explore New Challenge</h2>
                    <p className="explore-paragraph">
                        Free and Premium Challenge are added every week! Explore different categories like Fitness, Health, and Mindfulness.
                    </p>
                </div>
                <div className="card">
                    <div className="card-item" id="first-card" data-aos="zoom-in">
                        <img src={image} alt="card-pic" className="card-image"/>
                        <p className="card-paragraph">50 Push-Up Max</p>
                    </div>
                    <div className="card-item" id="two-card" data-aos="zoom-out">
                    <img src={muscle} alt="card-pic" className="card-image"/>
                        <p className="card-paragraph">Muscle & Strength At Home</p>
                    </div>
                    <div className="card-item" id="three-card" data-aos="zoom-in">
                    <img src={fit} alt="card-pic" className="card-image"/>
                        <p className="card-paragraph">Fit & Fierce At-Home</p>
                    </div>
                    <div className="card-item" id="four-card" data-aos="zoom-out">
                    <img src={power} alt="card-pic" className="card-image"/>
                        <p className="card-paragraph">Pure Power At-Home</p>
                    </div>
                </div>
            </div>

            <div className="track-container">
                <div className="track-left" data-aos='fade-right'>
                        <h1 className="track-left-heading">Day 22</h1>
                        <p className="track-left-paragraph">COMPLETED</p>
                        <img src={muscle} alt="track-pic" className="track-image" />
                </div>
                <div className="track-right" data-aos='fade-left'>
                    <h1 className="track-heading">Track Your Progress</h1>
                    <p className="track-paragraph">Your challenges consist of a series of tasks. <br /> Mark off your daily tasks to track your overall progress and keep yourseld accountable.</p>
                    <button type="submit" className="track-right-bton"><IoLogoApple className="apple-logo-track"/>Download iOS</button>
                </div>
            </div>

            <div className="inspire-container">
                <div className="inspire-left" data-aos='fade-right'>
                    <h1 className="inspire-heading">Inspire With Social</h1>
                    <p className="inpire-paragraph">Post progress pictures, comments, and cheer each other on throughout the challenge; all in your challenge social feed.</p>
                    <button type="submit" className="inspire-left-btn"><IoLogoApple className="apple-logo-inspire"/>Download iOS</button>
                </div>
                <div className="inspire-right" data-aos='fade-left'>
                    <img src={power} alt="inspire-pic" className="inspire-image" />
                </div>
            </div>

            <div className="premium-container">
                <div className="premium-left" data-aos='fade-right'>
                    <img src={fit} alt="premium-pic" className="premium-image" />
                </div>
                <div className="premium-right" data-aos='fade-left'>
                    <h1 className="premium-heading">Try Premium Challenges</h1>
                    <p className="premium-paragraph">Discover new challenges hosted by your favourite influencers and companies. <br /> Premium challenges give you access to exclusive content and community.</p>
                    <button type="submit" className="premium-right-btn"><IoLogoApple className="apple-logo-premium"/>Download iOS</button>
                </div>
            </div>

            <div className="join-container">
                <h1 className="join-heading">Join Fitness For Free</h1>
                    <div className="join-grid-div">
                        <div className="join-left">
                            <ul className="left-list" data-aos='fade-right'>
                                <div className="list-item">
                                    <TiTick className="list-icon"/>
                                    <li className="left-list-item"> Create Your Own Free Fitness Challenge</li>
                                </div>
                                <div className="list-item">'
                                    <TiTick className="list-icon"/>
                                    <li className="left-list-item"> Access Other People's Challenges</li>
                                </div>
                                <div className="list-item">
                                    <TiTick className="list-icon"/>
                                    <li className="left-list-item"> Unlimited Sharing With Friends & Family</li>
                                </div>
                                <div className="list-item">
                                    <TiTick className="list-icon"/>
                                    <li className="left-list-item"> Interact With Community in Social</li>
                                </div>
                            </ul>
                        </div>

                        <div className="join-right">
                            <div className="join-right-card" data-aos='fade-left'>
                                <div className="card-top">
                                    <TiFlash className="flash-icon"/>
                                    <p className="right-card-text">Fitsness: <br />Challenge Your Friends.</p>
                                </div>
                                <button type="submit" className="join-right-btn"><IoLogoApple className="apple-logo-b"/>Download iOS</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Explore
