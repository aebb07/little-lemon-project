import React from 'react'

const Nav = () => {
    return (
        <div>
            <div className="logo">
                <img src="Logo.jpg" alt="Little Lemon Logo" />
            </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="./About">About</a></li>
                    <li><a href="./Menu">Menu</a></li>
                    <li><a href="./Reservations">Reservations</a></li>
                    <li><a href="./OrderOnline">Order Online</a></li>
                    <li><a href="./Login">Login</a></li>
                </ul>
        </div>
    );
};



export default Nav;