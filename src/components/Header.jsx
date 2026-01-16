import React from 'react'
import logo from '../assets/img/logo/logo.svg';
import "../assets/fontawsome/css/fontawesome.css"
import Menu from './Menu';
import { Link, NavLink } from 'react-router';
import MobileMenu from './MobileMenu';

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
          <MobileMenu />
        </header>
    )
}

export default Header