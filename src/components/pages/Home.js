import React from 'react';
import VideoHeader from '../VideoHeader';
import HomeCookingClasses from "../HomeCookingClasses";
import HomeAbout from "../HomeAbout";
import backgroundVideo from '../../videos/videoHeader.mp4';

const Home = () => {
    return (
        //I don't actually this logo does anything
        <div>

            <VideoHeader videoSource={backgroundVideo}/>
            <HomeCookingClasses/>
            <HomeAbout/>
        </div>
    );
};

export default Home;