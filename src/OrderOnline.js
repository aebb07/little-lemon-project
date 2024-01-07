import React from 'react';
import { useCart } from './CartContext';
import './OrderOnline.css';

const OrderOnline = () => {

  const { addToCart } = useCart();

  const menuItems = [
    { id: '1', name: 'Greek Salad', img: 'greek salad.jpg' , description: 'Fresh and healthy Greek salad with tomatoes, cucumbers, olives, and feta cheese.' ,price: 10.99 },
    { id:'2', name: 'Bruschetta', img:'bruchetta.svg', description: 'Delicious bruschetta with tomatoes, basil, garlic, and balsamic glaze.' , price: 8.99 },
    { id: '3', name: 'Lemon Dessert', img: 'lemon dessert.jpg', description: 'Sweet and tangy lemon dessert, the perfect way to end your meal.', price: 6.99 },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };
  
  return (
  <div className="overlay">
    <div className="order-online-container">
      <h2>Order Online</h2>

      {menuItems.map((item, index) => (
      <div key={index} className="menu-item">
      <img src= {item.img} alt="Menu pic" />
        <div className="menu-item-details">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
            <div className="price-add-to-cart">
            <p className="price">${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default OrderOnline;
