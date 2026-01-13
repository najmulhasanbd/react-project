import React from 'react'
import { NavLink } from 'react-router'
import AboutPage from '../pages/AboutPage'

const Menu = () => {
    return (
        <>
            <ul className="navbar-nav mx-auto mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="#">
                        Home <i className="fas fa-chevron-down"></i>
                    </NavLink>
                    <ul className="sub-menu list-unstyled">
                        <li>
                            <NavLink to="/">Home One</NavLink>
                        </li>
                        <li>
                            <NavLink to="home-two">Home Two</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        About Us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">
                        Services <i className="fas fa-chevron-down"></i>
                    </NavLink>
                    <ul className="sub-menu list-unstyled">
                        <li>
                            <NavLink to="services">Service Single</NavLink>
                        </li>
                        <li>
                            <NavLink to="service-details">Service Details</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">
                        Projects <i className="fas fa-chevron-down"></i>
                    </NavLink>
                    <ul className="sub-menu list-unstyled">
                        <li>
                            <NavLink to="projects">Project Single</NavLink>
                        </li>
                        <li>
                            <NavLink to="project-details">Project Details</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">
                        Blog <i className="fas fa-chevron-down"></i>
                    </NavLink>
                    <ul className="sub-menu list-unstyled">
                        <li>
                            <NavLink to="blog">Blog Single</NavLink>
                        </li>
                        <li>
                            <NavLink to="blog-details">Blog Details</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Menu