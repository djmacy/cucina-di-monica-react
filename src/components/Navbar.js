import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav>
            <Logo />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;