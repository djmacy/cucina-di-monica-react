import React, { useRef, useEffect, useState } from 'react';
import './HomeAbout.css';
import MonicaWFocaccia from "../images/MonicaWFocaccia.jpeg"

const HomeAbout = () => {

    const [isImageVisible, setIsImageVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsImageVisible(true);
                    } else {
                        setIsImageVisible(false);
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className="home-about-container">


            {/* Left Container - Image */}
            <div className={`about-image-container ${isImageVisible ? 'scale-up' : ''}`}>
                {/* Include your image here */}
                <img ref={imageRef} src={MonicaWFocaccia} alt="About Me" />
            </div>

            {/* Right Container - Title and Description */}
            <div className={`about-text-container ${isImageVisible ? 'appear' : ''}`}>
                <h2>About</h2>
                <p>

                    When you join me for an Italian culinary experience, you will not only learn how to prepare a wonderful Italian menu, but I will share with you the
                    history and culture of the dishes while we create a spectacular meal. You will transport your senses through the aroma, textures, and tastes of my homeland.
                </p>
            </div>
        </div>
    );
};

export default HomeAbout;