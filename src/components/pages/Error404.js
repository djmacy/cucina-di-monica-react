import React from 'react';
import './Error404.css'; // External CSS for styles

const Error404 = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">404</h1>
                <p className="error-message">Oops! Page Not Found</p>
                <button className="home-button" onClick={() => window.location.href = "/"}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default Error404;
