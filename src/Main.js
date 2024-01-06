import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';



const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

        return (
        <div>
            {isModalOpen && (
                <div className="modal">
                <button onClick={closeModal}>Close Modal</button>
                </div>
            )}
                <Routes>
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Reservations" element={<Reservations isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />} />
                    <Route path="/OrderOnline" element={<OrderOnline openModal={openModal} closeModal={closeModal} />} />
                    <Route path="/Login" element={<Login openModal={openModal} closeModal={closeModal} />} />
                </Routes>
        </div>

        )
}

export default Main;