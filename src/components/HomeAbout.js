import React from 'react';
import './HomeAbout.css'; // You can create a separate CSS file for styling
import

const HomeAbout = () => {
    return (
        <div className="home-about-container">
            {/* Left Container - Image */}
            <div className="about-image-container">
                {/* Include your image here */}
                <img src="path/to/your/image.jpg" alt="About Me" />
            </div>

            {/* Right Container - Title and Description */}
            <div className="about-text-container">
                <h2>About Me</h2>
                <p>
                    Your description goes here. Provide some information about yourself, your cooking style,
                    and anything else you'd like to share.
                </p>
            </div>
        </div>
    );
};

export default HomeAbout;