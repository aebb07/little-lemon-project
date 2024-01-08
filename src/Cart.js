import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useCart();

  // Calculate total items in cart
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-link">
      <div className="cart-icon" role="button" aria-label="Open Shopping Cart">
        <img src="basket .svg" alt="Shopping Cart" />
        {totalCount > 0 && <span className="item-count" aria-live="polite">{totalCount}</span>}
      </div>
    </Link>
  );
};

export default Cart;


