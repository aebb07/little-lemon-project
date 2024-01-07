import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import './Nav.css';

const Nav = () => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => {
      setIsLoginModalOpen(true);
    };
  
    const closeLoginModal = () => {
      setIsLoginModalOpen(false);
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

    return (
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <img src="Logo.svg" alt="Little Lemon Logo" />
                </Link>
            </div>
                <ul>
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
                </ul>
                <Cart />
                <Login closeModal={closeLoginModal} isModalOpen={isLoginModalOpen} />
        </div>
    );
};



export default Nav;