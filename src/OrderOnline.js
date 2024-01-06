import React from 'react';
import './OrderOnline.css';

const OrderOnline = () => {
  return (
    <div className="order-online-container">
      <h2>Order Online</h2>

      <div className="menu-item">
        <img src="greek_salad.jpg" alt="Greek Salad" />
        <div className="menu-item-details">
          <h3>Greek Salad</h3>
          <p>Fresh and healthy Greek salad with tomatoes, cucumbers, olives, and feta cheese.</p>
          <p className="price">$10.99</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="menu-item">
        <img src="bruschetta.jpg" alt="Bruschetta" />
        <div className="menu-item-details">
          <h3>Bruschetta</h3>
          <p>Delicious bruschetta with tomatoes, basil, garlic, and balsamic glaze.</p>
          <p className="price">$8.99</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="menu-item">
        <img src="lemon_dessert.jpg" alt="Lemon Dessert" />
        <div className="menu-item-details">
          <h3>Lemon Dessert</h3>
          <p>Sweet and tangy lemon dessert, the perfect way to end your meal.</p>
          <p className="price">$6.99</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
