import React from 'react'
import './trainers.css'
import AOS from 'aos'
const Trainers = () => {
    AOS.init({
        duration: 1000,
    })
    return (
        <div className="trainer-container">
            <div className="about-page-image">
                <div className="image-content">
                    <h1 className="content-heading">ABOUT US</h1>
                    <p className="content-paragraph">Home/About</p>
                </div>
            </div>
        </div>
    )
}

export default Trainers
