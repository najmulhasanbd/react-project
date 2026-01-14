import React from 'react';
// ইমেজ ইমপোর্ট
import footerBg from '../assets/img/bg/footer-bg-1.svg';
import shortIcon1 from '../assets/img/icons/footer-short-icon-1.svg';
import shortIcon2 from '../assets/img/icons/footer-short-icon-2.svg';
import shortIcon3 from '../assets/img/icons/footer-short-icon-3.svg';
import logo2 from '../assets/img/logo/logo2.svg';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="ep-footer-section pt-120">
            <div 
                className="footer-bg" 
                style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover' }}
            >
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-4 col-md-6">
                            <div className="footer-short-info rounded-20 d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                                    <img src={shortIcon1} alt="Fusion Solutions" />
                                </div>
                                <div className="text">
                                    <h4 className="title">Tech Fusion Solutions</h4>
                                    <p>It encompasses the use of computers, networks</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="footer-short-info rounded-20 d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                                    <img src={shortIcon2} alt="Digital Edge" />
                                </div>
                                <div className="text">
                                    <h4 className="title">Digital Edge Innovations</h4>
                                    <p>Other digital technologies to store place network</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="footer-short-info rounded-20 d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                                    <img src={shortIcon3} alt="Cloud Wave" />
                                </div>
                                <div className="text">
                                    <h4 className="title">Cloud Wave Services</h4>
                                    <p>The rapid advancement of technology continuously</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className="footer-main mt-5">
                        <div className="row g-4">
                            {/* About Widget */}
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-widget footer-about">
                                    <div className="logo mb-3">
                                        <Link to="/">
                                            <img src={logo2} alt="Company Logo" />
                                        </Link>
                                    </div>
                                    <div className="short-info mb-4">
                                        <p>Drives innovation within the IT sector, making it a dynamic</p>
                                    </div>
                                    <div className="contact-info">
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                                    <h4 className="title mb-0 h6">Address</h4>
                                                </div>
                                                <p className="ms-4 mb-0">2464 Royal Ln. Mesa, New Jersey</p>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-envelope text-primary"></i>
                                                    <h4 className="title mb-0 h6">Email</h4>
                                                </div>
                                                <Link to="mailto:curtis.weaver@example.com" className="ms-4 text-decoration-none">curtis.weaver@example.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Services Widget */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget footer-links services-widget">
                                    <h4 className="footer-title mb-4 font-bold">Services</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/services" className="text-decoration-none"><i className="fas fa-chevron-right me-2"></i> InfoSec Experts</Link></li>
                                        <li><Link to="/services" className="text-decoration-none"><i className="fas fa-chevron-right me-2"></i> Quantum IT Solutions</Link></li>
                                        <li><Link to="/services" className="text-decoration-none"><i className="fas fa-chevron-right me-2"></i> NexusTech Systems</Link></li>
                                        <li><Link to="/services" className="text-decoration-none"><i className="fas fa-chevron-right me-2"></i> SmartNet IT Services</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-xl-3 col-lg-2 col-md-6">
                                <div className="footer-widget footer-links links-widget">
                                    <h4 className="footer-title mb-4 font-bold">Links</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to="/about" className="text-decoration-none">About Us</Link></li>
                                        <li><Link to="/services" className="text-decoration-none">Services</Link></li>
                                        <li><Link to="/projects" className="text-decoration-none">Projects</Link></li>
                                        <li><Link to="/blog" className="text-decoration-none">Blog And News</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-widget recent-post-widget">
                                    <h4 className="footer-title mb-4 font-bold">Recent Post</h4>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <Link to="/blog-details" className="text-decoration-none">
                                                <span className="title d-block text-dark fw-semibold">Crafting Tomorrow’s Digital World</span>
                                                <small className="text-muted"><i className="fas fa-calendar-alt me-1"></i> October 19, 2024</small>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details" className="text-decoration-none">
                                                <span className="title d-block text-dark fw-semibold">Technology That Powers the Future</span>
                                                <small className="text-muted"><i className="fas fa-calendar-alt me-1"></i> October 19, 2024</small>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="footer-bottom mt-5 py-4 border-top">
                            <div className="row g-2 align-items-center">
                                <div className="col-lg-6">
                                    <div className="footer-copyright text-center text-lg-start">
                                        <p className="mb-0">© Yoursitename 2024 | All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-menu text-center text-lg-end">
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-inline-block me-3"><Link to="#" className="text-decoration-none">Terms & Condition</Link></li>
                                            <li className="d-inline-block me-3"><Link to="#" className="text-decoration-none">Privacy Policy</Link></li>
                                            <li className="d-inline-block"><Link to="/contact" className="text-decoration-none">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;