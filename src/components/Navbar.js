import React, {useEffect, useState} from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
    useEffect(() => {
        // Add event listener to track scroll position and update navbar opacity
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbar = document.querySelector('nav');

            // Change the alpha channel based on the scroll position
            const newOpacity = Math.min(scrollPosition / 100, 1); // Adjust 200 to your preference
            navbar.style.backgroundColor = `rgba(253, 236, 190, ${newOpacity})`;
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <Logo />
            <ul className="navbar-link">
                <li><a href="/">Home</a></li>
                <li><a href='/courses'>Classes</a></li>
                {/*<li><a href='#'>Equipment</a></li>*/}
                <li><a href='#'>FAQ</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;