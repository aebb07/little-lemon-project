import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div id="menu-section" className="menu">
      <div className="menu-title">
        <h2>This weeks Specials!</h2>
        <Link to="/OrderOnline" className="button">Online Menu</Link>
      </div>
      <div className="menu-cards">
        <div className="menu-card">
          <img src="greek salad.jpg" alt="Greek Salad" />
            <div className="card-content">
                <div className="title-price-container">
                  <h3>Greek Salad</h3>
                  <p className="price">Price: $10.99</p>
                </div>
              <p className="description-menu">Famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <p className="order-delivery"><a href='/OrderOnline'>Order a delivery <FontAwesomeIcon icon={faBicycle} /></a></p>
            </div>
        </div>
        <div className="menu-card">
          <img src="bruchetta.svg" alt="Bruchetta" />
            <div className="card-content">
                <div className="title-price-container">
                  <h3>Bruchetta</h3>
                  <p className="price">Price: $12.99</p>
                </div>
              <p className="description-menu-2">Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <p className="order-delivery"><a href='/OrderOnline'>Order a delivery <FontAwesomeIcon icon={faBicycle} /></a></p>
            </div>
        </div>
        <div className="menu-card">
          <img className="lemon-dessert" src="lemon dessert.jpg" alt="Lemon Dessert" />
            <div className="card-content">
                <div className="title-price-container">
                  <h3>Lemon Dessert</h3>
                  <p className="price">Price: $15.99</p>
                </div>
              <p className="description-menu">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <p className="order-delivery"><a href='/OrderOnline'>Order a delivery <FontAwesomeIcon icon={faBicycle} /></a></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
