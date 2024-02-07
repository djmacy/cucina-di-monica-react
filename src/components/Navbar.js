import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav>
            <Logo />
            <ul className="navbar-link">
                <li><a href="/">Home</a></li>
                <li><a href='/classes'>Classes</a></li>
                <li><a href='#'>Equipment</a></li>
                <li><a href='#'>FAQ</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;