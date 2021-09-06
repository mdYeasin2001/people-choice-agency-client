import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaNpm } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="nav">
            <ul className="nav_menu">
                <li className="nev_item"><AiOutlineShoppingCart /> Home</li>
                <li className="nev_item"><FaNpm /> Service</li>
                <li className="nev_item">About</li>
            </ul>
        </div>
    );
};

export default Navbar;