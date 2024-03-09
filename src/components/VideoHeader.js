// VideoHeader.js
import React, { useState, useEffect } from 'react';
import './VideoHeader.css';

const VideoHeader = ({ title, videoSource }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const videoHeaderStyle = {
        position: 'relative',
        height: '500px',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <header className='video-header-container' style={videoHeaderStyle}>
            <video className='video-background' autoPlay /*loop*/ muted onLoadedData={() => setIsLoaded(true)}>
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <h1 className='header-title'>{title}</h1>
            {/* Add other elements as needed */}
        </header>
    );
};

export default VideoHeader;
