import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import CartPage from './CartPage';
import './App.css';


function App() {

  return (
    <Router>
    <div>
      <Nav />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
        <div className="app-container">
        <Footer />
        </div>
    </div>
    </Router>
  );
}

export default App;
