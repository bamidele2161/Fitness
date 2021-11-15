import React from 'react'
import './footer.css'
import { IoFitness } from 'react-icons/io5'
import AOS from 'aos'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoApple } from 'react-icons/io5'
import { FaGooglePlay } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-first-div">
                <div className="footer-badge">
                    <div className="badge">
                        <IoLogoApple className="badge-logo" />
                        <div>
                            <p id="download-text">Download from</p>
                            <p className="badge-os">Apple Store</p>
                        </div>
                    </div>
                    <div className="badge">
                        <FaGooglePlay className="badge-logo" />
                        <div>
                            <p id="download-text">Download from</p>
                            <p className="badge-os">Google Store</p>
                        </div>
                    </div>
                </div>

                <div className="footer-social-icons">
                    <FaFacebookF className="social-icon" />
                    <FaInstagram className="social-icon" />
                    <FaLinkedinIn className="social-icon" />
                </div>
            </div>

            <div className="footer-second-div">
                <div className="footer-card">
                    <h2>Useful Pages</h2>
                    <a className="footer-page" href="about.html">About Us</a>
                    <a className="footer-page" href="service.html">Services</a>
                    <a className="footer-page" href="track.html">Track Your Progress</a>
                    <a className="footer-page" href="contact.html">Contact Us</a>
                    <a className="footer-page" href="login.html">login</a>
                    <a className="footer-page" href="signup.html">Sign Up</a>
                </div>

                <div className="footer-card">
                    <h2>Fitness</h2>
                    <a href=""className="footer-page" >Terms of use</a>
                    <a className="footer-page" href="">Privacy policy</a>
                    <a className="footer-page" href="">Cookies</a>
                    <a className="footer-page" href="">Help</a>
                    <a className="footer-page" href="">FQAs</a>
                </div>

                <div className="footer-card">
                <h2>Contact Us</h2>
                    <a className="footer-page" href="service.html">akinyemibamidele2@gmail.com</a>
                </div>

                <div className="footer-card">
                    <h2>Newsletter</h2>
                    <p>
                    Subscribe to our Newsletter.
                    </p>
                    <div class="form">
                        <input class="form-control" placeholder="Email here" />
                        <button class="btn">Submit</button>
                    </div>
                </div>

            </div>

            <div className="footer-last-div">
                <h2 className="logo-text" id="logo-text-footer">FITN<span><IoFitness className="fit-icon" /></span>SS</h2>
                <p className="footer-copy">&copy; <a className="footer-page" href="#">Fitness</a>, All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
