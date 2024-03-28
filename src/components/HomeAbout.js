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
                <h2>About Me</h2>
                <p>
                    Hello! My name is Monica (Maino) Macy. I was born and raised in a small town in the Vicenza, Veneto region of Italy.  I first left Italy when I was 22 years old and have experienced
                    food and cultures from around the world ever since. No matter where I am, my heart always returns me to the delicious tastes and smells of Italian food. My mamma and papà both
                    worked full-time jobs while I was growing up, so I was constantly at my nonna Maria’s home. Being at her house was like being on a farm as she raised chickens, pigs, and other
                    animals. As far back as I can remember I watched her cook. These experiences in my life really elevated my passion for food, as she would always prepare the meals to bring family
                    and friends together. When you join me for an Italian culinary experience, you will not only learn how to prepare a wonderful Italian menu, but I will also share with you the history
                    and culture of the dishes while we create a spectacular meal. You will transport your senses through the aroma, textures, and tastes of my homeland.
                </p>
            </div>
        </div>
    );
};

export default HomeAbout;