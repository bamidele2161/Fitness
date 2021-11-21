import React from 'react'
import './contact.css'
import AOS from 'aos';

const Contact = () => {
    AOS.init({
        duration: 1000,
    })
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1 className="contact-heading" data-aos='fade-right'>Need help or have a question?</h1>
                <p className="contact-paragraph" data-aos='fade-left'>Fitness customer service will help you with any question or concern you might have. Please review the FAQ section before submitting an email request.</p>
                <div className="contact-btn" data-aos="zoom-in">
                    <button className="faq-button">Frequently Asked Questions</button>
                    <button className="Email-button">Email Us</button>
                </div>
            </div>

            <div className="customer-service">
                <form className="customer-form" action="#">
                    <h1 className="form-heading">Customer Service</h1>
                    <div className="form-inputs">
                        <div className="inputs" data-aos="zoom-out">
                            <input type="text" className="input-field"  placeholder="Full Name"/>
                            <input type="text" className="input-field" id="email-id" placeholder="Email"/>
                        </div>
                        <textarea placeholder="What can we help you with?" data-aos="zoom-out"></textarea>
                        <div className="button-div">
                            <button className="send-btn" data-aos="zoom-in">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        
    )
}

export default Contact
