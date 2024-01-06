import React from 'react';
import './Header.css';


const Header = ({ title, subtitle, description, buttonContent }) => {
  return (
  <header className="hero">
    <div className="hero-content">
      <h1 className="title-restaurant">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p className='description-little-lemon'>{description}</p>
      <button>{buttonContent}</button>
    </div>
    <div className="hero-image">
      <img src="restauranfood.jpg" alt="Hero" />
    </div>
  </header>
  );
};

export default Header;