import React from 'react';
import VideoHeader from '../VideoHeader';
import HomeCookingClasses from "../HomeCookingClasses";
import backgroundVideo from '../../videos/videoHeader.mp4';

const Home = () => {
    return (
        <div>
            <VideoHeader title=/*"La Cucina Di Monica"*/"" videoSource={backgroundVideo} />
            <HomeCookingClasses/>
        </div>
    );
};

export default Home;