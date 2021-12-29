import React, {useState} from 'react'
import './style.css'
import NavTop from '../Components/NavTop';
import Footer from '../Components/Footer';
import { FaArrowCircleUp } from 'react-icons/fa'
import Trainers from '../Components/Trainers';

const TrainersP = () => {
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
    <div className="trainers" path="trainers">
      <NavTop />
      <Trainers />
      <Footer />
      <span>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop}/></span>
    </div>
  );
}

export default TrainersP;
