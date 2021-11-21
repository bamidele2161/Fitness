import React from 'react'
import './about.css'
import image from '../../images/cardoo.jpg'
import imageone from '../../images/undrawtwo.svg'
import AOS from 'aos'
import { TiTick } from 'react-icons/ti'
import { IoTimeOutline, IoBarbell, IoWalkOutline } from 'react-icons/io5'
const About = () => {
    AOS.init({
        duration: 1000,
    })
    return (
        <div className="about-container">
            <div className="about-page-image">
                <div className="image-content">
                    <h1 className="content-heading">ABOUT US</h1>
                    <p className="content-paragraph">Home/About</p>
                </div>
            </div>
            <div className="about-us">
                <div className="about-left" data-aos='fade-right'>
                    <img src={image} alt="" className="about-pic" />
                </div>
                <div className="about-right" data-aos='fade-left'>
                    <h1 className="about-heading">WE <span>RAISE</span> YOUR CONFIDENCE</h1>
                    <p className="about-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam molestias facilis ullam dolorum, reprehenderit dolorem accusantium sit quo 
                        dolore nostrum assumenda obcaecati animi commodi nobis labore exercitationem corporis esse eveniet optio laudantium molestiae maiores pariatur nisi cumque. 
                        Distinctio et, totam, dicta autem nostrum doloribus ipsam vel rerum, molestiae soluta laboriosam.
                    </p>
                </div>
            </div>
            <div className="our-speciality">
                <div className="speciality-left" data-aos='fade-right'>
                    <h1 className="speciality-heading">OUR <span>SPECIALITY</span></h1>
                    <ul className="left-list" >
                        <div className="list-item">
                            <TiTick className="list-icon"/>
                            <li className="left-list-item">Physical Education</li>
                        </div>
                        <div className="list-item">'
                            <TiTick className="list-icon"/>
                            <li className="left-list-item"> Personalized Items</li>
                        </div>
                        <div className="list-item">
                            <TiTick className="list-icon"/>
                            <li className="left-list-item">Weight Loss</li>
                        </div>
                        <div className="list-item">
                            <TiTick className="list-icon"/>
                            <li className="left-list-item">Weight Gain</li>
                        </div>
                        <div className="list-item">
                            <TiTick className="list-icon"/>
                            <li className="left-list-item"> Interact With Community in Social</li>
                        </div>
                    </ul>
                </div>
                <div className="speciality-right" data-aos='fade-left'>
                    <img src={imageone} className="speciality-pic" alt="speciality" />
                </div>
            </div>
            <div className="about-menu" data-aos='zoom-out'>
                <div className="about-card-item">
                    <IoTimeOutline className="about-card-icon"/>
                    <p className="card-text">24/7 Open</p>
                </div>
                <div className="about-card-item">
                    <IoBarbell className="about-card-icon"/>
                    <p className="card-text">Quality Equipment</p>
                </div>
                <div className="about-card-item">
                    <IoWalkOutline className="about-card-icon"/>
                    <p className="card-text">Best Trainers</p>
                </div>
            </div>
            <div className="about-location" data-aos='zoom-in'>
                <h1 className="location-heading">CONTACT <span>US</span></h1>
                <p className="location-address"> Address - Bayduck Filling Station, Along North Gate FUTA.</p>
            </div>
        </div>
    )
}

export default About
