import React from 'react'
import logo from '../assets/img/logo/logo.svg';
import "../assets/fontawsome/css/fontawesome.css"
import Menu from './Menu';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <header className="ep-header-section w-100" id="sticky-header">
            <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
                <div className="container header-one-container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Menu />
                        <div className="call-us">
                            <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                                <span className="icon d-flex justify-content-center
               align-items-center">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <div className="info">
                                    <span className="title">Need help?</span>
                                    <h5 className="number">+123 456 7890</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mobile-menu-area d-block d-xl-none">
                <div className="container">
                    <div className="mobile-topbar">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <Link to="/"> <img src={logo} alt="logo" /></Link>
                            </div>
                            <div className="bars">
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay"></div>
                <div className="mobile-menu-main">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="close-mobile-menu"><i className="fas fa-times"></i></div>
                    <div className="menu-body">
                        <div className="menu-list">
                            <ul className="list-unstyled">
                                <li className="sub-mobile-menu">
                                    <Link href="#">Home <i className="fas fa-chevron-down float-end"></i></Link>
                                    <ul className="list-unstyled">
                                        <li><Link to="/">Home One</Link></li>
                                        <li><Link to="home-two">Home Two</Link></li>
                                    </ul>
                                </li>
                                <li className="sub-mobile-menu">
                                    <Link to="about">About Us</Link>
                                </li>
                                <li className="sub-mobile-menu">
                                    <Link href="#">Services <i className="fas fa-chevron-down float-end"></i></Link>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="service">Service Single</Link>
                                        </li>
                                        <li>
                                            <Link to="service-details">Service Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-mobile-menu">
                                    <Link href="#">Projects <i className="fas fa-chevron-down float-end"></i></Link>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="projects">Project Single</Link>
                                        </li>
                                        <li>
                                            <Link to="project-details">Project Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-mobile-menu">
                                    <Link href="#">Blog <i className="fas fa-chevron-down float-end"></i></Link>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="blog">Blog Single</Link>
                                        </li>
                                        <li>
                                            <Link to="blog-details">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-mobile-menu">
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="call-us p-4">
                        <Link href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                            <span className="icon d-flex justify-content-center
             align-items-center">
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            <div className="info">
                                <span className="title">Need help?</span>
                                <h5 className="number">+123 456 7890</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header