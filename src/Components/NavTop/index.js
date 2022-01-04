import React, {useState, useEffect} from 'react'
import './navbar.css'
import { IoFitness, IoLogoApple } from 'react-icons/io5'
import { FaBars, FaTimes } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const NavTop = () => {
    const [navbar, setNavbar] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1065) {
            setMobile(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1065) {
                setMobile(true);
            }
            else {
                setMobile(false);
                setSidebar(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize);
        };
    }, []);

    

    const changeBackground = () => {
        if(window.scrollY  >= 5) {
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

AOS.init({
    duration: 2000
});
    return (
        <>
            <div  className={navbar? "nav-scroll" : " navbar-container" } >
            <div className="navbar-brand">
                <h2 className="logo-text">FITN<span><IoFitness className={navbar? "fit-icon" : "fit-icon-change" } /></span>SS</h2>
            </div>

            {!mobile && (
                <div className="right-navlink">
                    <div className="navbar-links">
                        <Link to='/home' className={navbar? "navlink" : "navlink-change"} id="contact-link">Home</Link>
                        <Link to='/about' className={navbar? "navlink" : "navlink-change"} id="contact-link">About</Link>
                        <Link to='/contact' className={navbar? "navlink" : "navlink-change"} id="contact-link">Contact Us</Link>
                        <Link to='/trainers' className={navbar? "navlink" : "navlink-change"} id="contact-link">Trainers</Link>
                        <Link to='/gallery' className={navbar? "navlink" : "navlink-change"} id="contact-link">Gallery</Link>
                        <Link to='/challenge' className={navbar? "navlink" : "navlink-change"} id="contact-link">Program</Link>
                    </div>
                    <div className={navbar? "white-bag-two":"white-bag-one"} data-aos='fade-down'>
                        <a className="navlink-btn" id={navbar? "app-download-change" : "app-download"}><IoLogoApple />Download App</a>
                    </div>
                </div>
            )}

            {mobile && (
                <div className="mobile-icon">
                    {sidebar ? (
                        <FaTimes className="fa-times" onClick={() => setSidebar(!sidebar)} />
                    ) : (
                        <FaBars className="fa-bars" onClick={() => setSidebar(!sidebar)}/>
                    )}
                </div>
            )}
            </div>

            <div className={sidebar? "sidebar active" : "sidebar"}>
                    <div className="sidebar-items">
                        <Link to="/home" className="sidebar-link" onClick={() => setSidebar(false)}>Home</Link>
                        <Link to="/about" className="sidebar-link" onClick={() => setSidebar(false)}>About</Link>
                        <Link to="/contact" className="sidebar-link" onClick={() => setSidebar(false)}>Contact Us</Link>
                        <Link to="/trainers" className="sidebar-link" onClick={() => setSidebar(false)}>Trainers</Link>
                        <Link to="/gallery" className="sidebar-link" onClick={() => setSidebar(false)}>Gallery</Link>
                        <Link to="/challenge" className="sidebar-link" onClick={() => setSidebar(false)}>Program</Link>
                        <a href="#" className="sidebar-link" onClick={() => setSidebar(false)}>Download App</a>
                    </div>
            </div>
        </>
    )
}

export default NavTop
