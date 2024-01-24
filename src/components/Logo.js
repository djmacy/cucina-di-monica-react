// Logo.js
import React from 'react';
import logoImage from '../images/helmet.png'; // Replace 'logo.png' with the path to your logo image

const Logo = () => {
    return (
        <div className="logo">
            <a href="/">
                <img src={logoImage} alt="Logo" />
            </a>
        </div>
    );
};

export default Logo;