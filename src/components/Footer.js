// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} La Cucina Di Monica LLC. All rights reserved.</p>
            <p>Powered by DavidDevelops</p>
        </footer>
    );
};

export default Footer;