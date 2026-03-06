import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../image/logo.svg';
import callIcon from '../image/call-icon.svg';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const headerClass = location.pathname === '/' ? 'header-home' : 'header-other';

    return (
        <header className={`header ${isSticky ? 'sticky' : ''} ${headerClass}`}>
            <div className="container">
                <div className="header_main pt-4 pb-4">
                    <div className="row">
                        <div className="col-2">
                            <div className="logo ps-4">
                                <a href="#"><img src={logo} alt="Logo" /></a>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="nav_bar pt-3 pb-3 ps-5 pe-5">
                                <nav className={isMenuOpen ? 'open-nav' : ''}>
                                    <i className="fa-solid fa-xmark" id="close" onClick={closeMenu}></i>
                                    <ul className="d-flex justify-content-between p-0 m-0">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                                onClick={closeMenu}
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/about"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                                onClick={closeMenu}
                                            >
                                                About us
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/Servicespage"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                                onClick={closeMenu}
                                            >
                                                Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/Ourwork"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                                onClick={closeMenu}
                                            >
                                                Our works
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/Ourwork"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                                onClick={closeMenu}
                                            >
                                                Our company
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/contact"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                                onClick={closeMenu}
                                            >
                                                Contact us
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                                <i className="fa-solid fa-bars" id="menu" onClick={toggleMenu}></i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="header_btn text-end">
                                        <div className="btn">
                                            <a to='/Career'>We Are Hiring</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="call_btn text-center">
                                        <button className="bg-transparent border border-0">
                                            <img src={callIcon} alt="Call Icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
