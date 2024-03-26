// Logo.js
import React from 'react';
import './Logo.css'
import logoImage from '../images/laCucinaDiMonicaLogo.png'; // Replace 'logo.png' with the path to your logo image

const Logo = ({below}) => {

    if (below) {
        return (
            <div className="logo-below">
                <img src={logoImage} alt="Logo"/>
                <h2 className="h2-below">La Cucina Di Monica</h2>

            </div>
        );
    } else {
        return (
            <div className="logo">
                <a href="/">
                    <img src={logoImage} alt="Logo"/>

                </a>
                <h2 className="h2-right">La Cucina Di Monica</h2>
            </div>
        );
    }
};

export default Logo;