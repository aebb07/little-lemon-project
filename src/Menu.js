import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="menu-cards">
        <div className="menu-card">
          <img src="greek salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p style={{ color: '#ee9972' }}>Price: $10.99</p>
          <p>Description of Dish 1.</p>
          <p>Order a delivery</p>
        </div>
        <div className="menu-card">
          <img src="bruchetta.svg" alt="Bruchetta" />
          <h3>Bruchetta</h3>
          <p style={{ color: '#ee9972' }}>Price: $12.99</p>
          <p>Description of Dish 2.</p>
          <p>Order a delivery</p>
        </div>
        <div className="menu-card">
          <img src="lemon dessert.jpg" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p style={{ color: '#ee9972' }}>Price: $15.99</p>
          <p>Description of Dish 3.</p>
          <p>Order a delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
