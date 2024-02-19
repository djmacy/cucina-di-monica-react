// Modal.js
import React from 'react';
import './Modal.css'; // Create a CSS file for styling

const Modal = ({isOpen, onClose, children}) => {

    const handleClose = () => {
        onClose();
    }

    const handleContentClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={ `modal ${isOpen ? "open" : ""}`} onClick={handleClose}>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className="modal-content" onClick={handleContentClick}>
                <button className="close-button" onClick={handleClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
