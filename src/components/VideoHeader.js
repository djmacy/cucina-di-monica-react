// VideoHeader.js
import React, { useState, useEffect } from 'react';
import './VideoHeader.css';
import Logo from './Logo.js'

const VideoHeader = ({ title, videoSource, endingImage }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    useEffect(() => {
        if (videoEnded) {
            document.querySelector('.video-header-container').style.backgroundColor = "#fdecbe";
        }
    }, [videoEnded]);
    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    const videoHeaderStyle = {
        position: 'relative',
        height: '500px',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <header className='video-header-container' style={videoHeaderStyle}>
            <video className='video-background' autoPlay /*loop*/ muted onLoadedData={() => setIsLoaded(true)} onEnded={handleVideoEnd}>
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            {videoEnded && <Logo below={true} className={"ending-image"}/> }

            {/* Add other elements as needed */}
        </header>
    );
};

export default VideoHeader;
