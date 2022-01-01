import React from 'react'
import './trainers.css'
import AOS from 'aos'
import bam from '../../images/bam.jpg'
import molar from '../../images/mola.jpg'
import sunny from '../../images/sunny.jpg'
const Trainers = () => {
    AOS.init({
        duration: 1000,
    })
    return (
        <div className="trainer-container">
            <div className="trainer-page-image">
                <div className="image-content">
                    <h1 className="content-heading">Trainers</h1>
                    <p className="content-paragraph">Home/Trainers</p>
                </div>
            </div>

            <div className="trainers-container">
                <h1 className="our-trainers">Our Trainers</h1>
                    <div className="trainer-div">
                        <div className="flex-item" data-aos='fade-right'>
                            <div className="image-div">
                                <img className="item-one-image" alt="first avatar" src={bam}/>
                            </div>
                            <div className="text-area">
                                <h3 className="trainer-name">Bamidele</h3>
                                <p>Weight Loss Trainer</p>
                            </div>
                        </div>

                        <div className="flex-item" data-aos="zoom-in">
                            <div className="image-div">
                                <img className="item-one-image" alt="first avatar" src={molar}/>
                            </div>
                            <div className="text-area">
                            <h3 className="trainer-name">Molar</h3>
                            <p>Weight Gain Trainer</p>
                            </div>
                        </div>
                        
                        <div className="flex-item" data-aos="fade-left">
                            <div className="image-div">
                                <img className="item-one-image" alt="first avatar" src={sunny}/>
                            </div>
                            <div className="text-area">
                            <h3 className="trainer-name">Sunny</h3>
                            <p>Weight Loss Trainer II</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Trainers
