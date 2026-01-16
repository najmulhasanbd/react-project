import React from 'react'
import logo from '../assets/img/logo/logo.svg';
import "../assets/fontawsome/css/fontawesome.css"
import Menu from './Menu';
import { Link } from 'react-router';
import MobileMenu from './MobileMenu';

const Header = () => {
    return (
        <>
            <div id="header-fixed-height"></div>
            <header className="ep-header-section ep-header-section-two w-100" id="sticky-header">
                {/* Desktop Navbar */}
                <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Menu />
                            <div className="call-us">
                                <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                                    <span className="icon d-flex justify-content-center align-items-center">
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

                <MobileMenu />
            </header>
        </>
    )
}

export default Header