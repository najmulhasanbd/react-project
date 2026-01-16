import React, { useState } from 'react';
import logo from '../assets/img/logo/logo.svg';
import { Link } from 'react-router';

// মেনু অ্যারে অফ অবজেক্ট
const menuData = [
    {
        id: 1, title: "Home", path: "#", subMenu: [
            { id: 11, title: "Home One", path: "/" },
            { id: 12, title: "Home Two", path: "/home-two" }
        ]
    },
    { id: 2, title: "About Us", path: "/about" },
    {
        id: 3, title: "Services", path: "#", subMenu: [
            { id: 31, title: "Service Single", path: "/service" },
            { id: 32, title: "Service Details", path: "/service-details" }
        ]
    },
    {
        id: 4, title: "Projects", path: "#", subMenu: [
            { id: 41, title: "Project Single", path: "/projects" },
            { id: 42, title: "Project Details", path: "/project-details" }
        ]
    },
    {
        id: 5, title: "Blog", path: "#", subMenu: [
            { id: 51, title: "Blog Single", path: "/blog" },
            { id: 52, title: "Blog Details", path: "/blog-details" }
        ]
    },
    { id: 6, title: "Contact", path: "/contact" },
];

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // মেইন মেনু স্টেট
    const [activeSubMenu, setActiveSubMenu] = useState(null); // সাব-মেনু টগল স্টেট

    // সাব-মেনু টগল ফাংশন
    const toggleSubMenu = (id) => {
        setActiveSubMenu(activeSubMenu === id ? null : id);
    };

    return (
        <div className="mobile-menu-area d-block d-xl-none">
            <div className="container">
                <div className="mobile-topbar">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <Link to="/"> <img src={logo} alt="logo" /></Link>
                        </div>
                        {/* মেনু ওপেন বাটন */}
                        <div className="bars" onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer' }}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* মেইন মেনু স্লাইডার এবং ওভারলে */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

            <div className={`mobile-menu-main ${isMenuOpen ? 'active' : ''}`}
                style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 0.4s ease-in-out',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: '300px',
                    zIndex: 9999,
                    backgroundColor: '#fff'
                }}>

                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <div className="logo">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}><img src={logo} alt="logo" /></Link>
                    </div>
                    {/* ক্লোজ বাটন */}
                    <div className="close-mobile-menu" onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                <div className="menu-body p-3">
                    <div className="menu-list">
                        <ul className="list-unstyled">
                            {menuData.map((menu) => (
                                <li key={menu.id} className="sub-mobile-menu border-bottom py-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={menu.path} onClick={!menu.subMenu ? () => setIsMenuOpen(false) : undefined}>
                                            {menu.title}
                                        </Link>
                                        {menu.subMenu && (
                                            <i
                                                className={`fas fa-chevron-down transition-all ${activeSubMenu === menu.id ? 'rotate-180' : ''}`}
                                                onClick={() => toggleSubMenu(menu.id)}
                                                style={{ cursor: 'pointer', padding: '10px' }}
                                            ></i>
                                        )}
                                    </div>

                                    {/* সাব-মেনু লিস্ট */}
                                    {menu.subMenu && (
                                        <ul className={`list-unstyled ms-3 mt-2 ${activeSubMenu === menu.id ? 'd-block' : 'd-none'}`}>
                                            {menu.subMenu.map((sub) => (
                                                <li key={sub.id} className="py-1">
                                                    <Link to={sub.path} onClick={() => setIsMenuOpen(false)}>
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="call-us p-4 mt-auto">
                    <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3 text-decoration-none">
                        <span className="icon d-flex justify-content-center align-items-center bg-primary text-white rounded-circle" style={{ width: '40px', height: '40px' }}>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <div className="info">
                            <span className="title text-muted d-block small">Need help?</span>
                            <h5 className="number mb-0">+123 456 7890</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;