import React from 'react';
import './Popup.css'; // Create and import a CSS file for styling the popup

const Popup = ({ isVisible, onClose, content }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
