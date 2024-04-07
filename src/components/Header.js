// Header.js
import React from 'react';
import './Header.css'; // Import a separate CSS file for Header if needed

const Header = ({ title, backgroundImage }) => {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        opacity: '90%',
        backgroundPosition: 'center',
        width: 'auto',
        height: '300px', // You can customize this
        textAlign: 'center',
        textShadow: '800',
        padding: '50px' // Adjust the padding as needed
    };

    return (
        <header className='header-container' style={headerStyle}>
            <h1 className='header-title'>{title}</h1>
            {/* Add other elements as needed */}
        </header>
    );
};

export default Header;
