import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = ({ title, subtitle, description, buttonContent }) => {
  return (
  <header className="hero">
    <div className="hero-content">
      <h1 className="title-restaurant">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p className='description-little-lemon'>{description}</p>
      <Link to="/Reservations" className="button">{buttonContent}</Link>
    </div>
    <div className="hero-image">
      <img src="restauranfood.jpg" alt="Hero" />
    </div>
  </header>
  );
};

export default Header;