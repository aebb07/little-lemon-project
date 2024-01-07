import React from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const checkoutButton = () => {
    console.log('Checkout Done');
  }

  return (
    <div className="overlay">
    <div className="cart-page-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} style={{ width: '150px', height: '145px', objectFit: 'cover' }} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>Amount: {item.quantity}</p>
                <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>X</button>
              </div>
            </div>
          ))}
          <div className="total-payment-info">
          <div className="payment-info">
            <FontAwesomeIcon icon={faCreditCard} />
            <FontAwesomeIcon icon={faPaypal} />
            <FontAwesomeIcon icon={faApplePay} />
            <FontAwesomeIcon icon={faGooglePay} />
          </div>
          <div className="total">
            <p>Total: ${getTotalPrice()}</p>
          </div>
            </div>
            <div className="button-pay">
                <button className="pay-button" onClick={() => checkoutButton()}>Checkout</button>
            </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
