import React, {useState, useEffect} from 'react'
import './navbar.css'
import { IoFitness, IoLogoApple } from 'react-icons/io5'
import { FaBars, FaTimes } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css';

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
                <h2 className="logo-text">FITN<span><IoFitness className="fit-icon" /></span>SS</h2>
            </div>

            {!mobile && (
                <div className="right-navlink">
                    <div className="navbar-links">
                        <a className="navlink">Premium Host</a>
                        <a className="navlink">Contact Us</a>
                    </div>
                    <div className={navbar? "white-bag-two":"white-bag-one"} data-aos='fade-down'>
                        <a className="navlink" id={navbar? "app-download-change" : "app-download"}><IoLogoApple />Download App</a>
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
                        <a href="#" className="sidebar-link" onClick={() => setSidebar(false)}>Home</a>
                        <a href="#" className="sidebar-link" onClick={() => setSidebar(false)}>Premium Host</a>
                        <a href="#" className="sidebar-link" onClick={() => setSidebar(false)}>Contact Us</a>
                        <a href="#" className="sidebar-link" onClick={() => setSidebar(false)}>Download App</a>
                    </div>
            </div>
        </>
    )
}

export default NavTop
