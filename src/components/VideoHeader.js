// VideoHeader.js
import React, {useState, useEffect, useRef} from 'react';
import './VideoHeader.css';
import Logo from './Logo.js'

const VideoHeader = ({ title, videoSource, endingImage }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef= useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
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

            <video className='video-background' ref={videoRef} autoPlay={true} /*loop*/ muted={true} playsInline={true} onLoadedData={() => setIsLoaded(true)} onEnded={handleVideoEnd}>
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            {videoEnded && <Logo below={true} className={"ending-image"}/> }
        </header>
    );
};

export default VideoHeader;
