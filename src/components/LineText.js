import React from 'react';
import './LineText.css';

const LineText = ({ text }) => {
    return (
        <div className="line-text-container">
            <div className="line"></div>
            <span className="text">{text}</span>
            <div className="line"></div>
        </div>
    );
};

export default LineText;
