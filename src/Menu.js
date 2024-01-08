import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Menu.css';


const MenuItem = ({ imgSrc, alt, title, price, description }) => {
  return (
    <div className="menu-card">
      <img src={imgSrc} alt={alt} />
      <div className="card-content">
        <div className="title-price-container">
          <h3>{title}</h3>
          <p className="price">Price: {price}</p>
        </div>
        <p className="description-menu">{description}</p>
        <p className="order-delivery">
          <a href='/OrderOnline'>Order a delivery <FontAwesomeIcon icon={faBicycle} /></a>
        </p>
      </div>
    </div>
  );
};


const Menu = () => {
  return (
    <section id="menu-section" className="menu">
      <div className="menu-title">
        <h2>This week's Specials!</h2>
        <Link to="/OrderOnline" className="button">Online Menu</Link>
      </div>
      <div className="menu-cards">
        <MenuItem
          imgSrc="greek salad.jpg"
          alt="Greek Salad"
          title="Greek Salad"
          price="$10.99"
          description="Famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <MenuItem
          imgSrc="bruchetta.svg"
          alt="Bruschetta"
          title="Bruschetta"
          price="$12.99"
          description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <MenuItem
          imgSrc="lemon dessert.jpg"
          alt="Lemon Dessert"
          title="Lemon Dessert"
          price="$15.99"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
};

export default Menu;
