import React, {useState} from 'react'
import './style.css'
import NavTop from '../Components/NavTop';
import Footer from '../Components/Footer';
import { FaArrowCircleUp } from 'react-icons/fa'
import About from '../Components/About';

const AboutUs = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
  window.addEventListener('scroll', checkScrollTop)
  return (
    <div className="contact" path="about">
      <NavTop />
      <About />
      <Footer />
      <span>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop}/></span>
    </div>
  );
}

export default AboutUs;
