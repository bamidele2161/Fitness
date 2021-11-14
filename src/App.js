import React, {useState} from 'react'
import './App.css'
import NavTop from './Components/NavTop';
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import { FaArrowCircleUp } from 'react-icons/fa'

function App() {
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
    <div className="App">
      <NavTop />
      <Hero />
      <Explore />
      <Footer />
      <span>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop}/></span>
    </div>
  );
}

export default App;
