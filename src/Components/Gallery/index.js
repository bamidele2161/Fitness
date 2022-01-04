import React from 'react'
import './gallery.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import bam from '../../images/bam.jpg'
import molar from '../../images/mola.jpg'
import gf from '../../images/gf.jpg'
import g2 from '../../images/g2.jpg'
import g3 from '../../images/g3.jpg'
import g4 from '../../images/g4.jpg'
AOS.init({
    duration: 1000
  })

const Gallery = () => {
    return (
        <div className="gallery-container">
        <div className="gallery-page-image">
                <div className="image-content">
                    <h1 className="content-heading">Gallery</h1>
                    <p className="content-paragraph">Home/Gallery</p>
                </div>
            </div>

            <div className="gallery-div">
                <h1 className="our-trainers">Photos</h1>
                <div className="gallery-items">
                    <div className="gallery-flex-item" data-aos="zoom-in">
                        <div className="image-div">
                            <img className="item-one-image" alt="first avatar" src={gf}/>
                        </div>
                    </div>
                    <div className="gallery-flex-item" data-aos="zoom-in">
                        <div className="image-div">
                            <img className="item-one-image" alt="first avatar" src={molar}/>
                        </div>
                    </div>
                    <div className="gallery-flex-item" data-aos="zoom-in">
                        <div className="image-div">
                            <img className="item-one-image" alt="first avatar" src={g4}/>
                        </div>
                    </div>

                    <div className="gallery-flex-item" data-aos="zoom-in">
                        <div className="image-div">
                            <img className="item-one-image" alt="first avatar" src={bam}/>
                        </div>
                    </div>
                    <div className="gallery-flex-item" data-aos="zoom-in">
                        <div className="image-div">
                            <img className="item-one-image" alt="first avatar" src={g2}/>
                        </div>
                    </div>
                    <div className="gallery-flex-item" data-aos="zoom-in">
                        <div className="image-div">
                            <img className="item-one-image" alt="first avatar" src={g3}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
