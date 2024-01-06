import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <img src="Logo.svg" alt="Little Lemon Logo" />
                </Link>
            </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/Reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/OrderOnline">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
        </div>
    );
};



export default Nav;