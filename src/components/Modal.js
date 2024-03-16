// Modal.js
import React, {useEffect} from 'react';
import './Modal.css'; // Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Modal = ({isOpen, onClose, children, id}) => {
    const navigate = useNavigate();

    const handleDiscoverMoreClick = () => {
        // Handle redirection logic or link to another page
        handleClose();
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    //will need to make this dynamic. Pass it as a parameter
    const cardElement = document.getElementById(id); // Replace with the actual ID or reference to your card element
    if (cardElement) {
        const rect = cardElement.getBoundingClientRect();

        const x = rect.left + window.scrollX;
        const y = rect.top + window.scrollY;

        // Set CSS variables
        document.documentElement.style.setProperty('--start-x', `${x}px`);
        document.documentElement.style.setProperty('--start-y', `${y}px`);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow='visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        }
    }, [isOpen]);
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
                <h3 className='discover-more' onClick={handleDiscoverMoreClick}>
                    Contact Me
                </h3>
            </div>
        </div>
    );
};

export default Modal;
