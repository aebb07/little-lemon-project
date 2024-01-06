// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="Logo-footer.png" alt="Footer Logo" />
      </div>
      <div className="footer-section">
        <h3>Doormat Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Address: Your Address</p>
        <p>Phone Number: Your Phone Number</p>
        <p>Email: Your Email</p>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <p>Address: Your Social Media Address</p>
        <p>Phone Number: Your Social Media Phone Number</p>
        <p>Email: Your Social Media Email</p>
      </div>
    </footer>
  );
};

export default Footer;
