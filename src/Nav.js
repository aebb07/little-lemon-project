import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import './Nav.css';

const Nav = () => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openLoginModal = () => {
      setIsLoginModalOpen(true);
    };
  
    const closeLoginModal = () => {
      setIsLoginModalOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleAboutClick = (event) => {
        event.preventDefault();
        scrollToSection('about-section');
      };

      const handleMenuClick = (event) => {
        event.preventDefault();
        scrollToSection('menu-section');
      };

      useEffect(() => {
        const handleOutsideClick = (event) => {
            const navContainer = document.querySelector('.container');
            if (isMobileMenuOpen && navContainer && !navContainer.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMobileMenuOpen]);


    return (
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <img src="Logo.svg" alt="Little Lemon Logo" />
                </Link>
            </div>
                <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <img src="menu-burger.svg" alt="Menu mobile" />
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/About" onClick={handleAboutClick}>About</Link>
                    </li>
                    <li>
                        <Link to="/Menu" onClick={handleMenuClick}>Menu</Link>
                    </li>
                    <li>
                        <Link to="/Reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/OrderOnline">Order Online</Link>
                    </li>
                    <li>
                        <button className="button-login-nav" onClick={openLoginModal}>Login</button>
                    </li>
                    <li>
                        <Cart />
                    </li>
                    <li>
                        <Login closeModal={closeLoginModal} isModalOpen={isLoginModalOpen} />
                    </li>
                </ul>
        </div>
    );
};



export default Nav;