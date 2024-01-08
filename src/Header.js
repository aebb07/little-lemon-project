import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = ({ title, subtitle, description, buttonContent }) => {
  return (
  <header className="hero">
    <div className="hero-content">
      <h1 className="title-restaurant">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <p className='description-little-lemon'>{description}</p>
      <Link to="/Reservations" className="button">
        {buttonContent}
      </Link>
    </div>
    <figure className="hero-image">
      <img src="restauranfood.jpg" alt="Hero" />
    </figure>
  </header>
  );
};

export default Header;