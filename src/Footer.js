import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img href="/" src="Logo-footer.png" alt="Footer Logo" />
      </div>
      <div className="footer-section">
        <h3>Doormat Navigation</h3>
        <div className="doormat-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Reservations">Reservations</Link>
        <Link to="/OrderOnline">Order Online</Link>
        <Link to="/Login">Login</Link>
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>123 Main Street, Cityville, Country</p>
        <p>+1 (555) 123-4567</p>
        <p>info@littlelemonrestaurant.com</p>
      </div>
      <div className="footer-section">
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

