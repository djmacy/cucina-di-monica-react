import React from 'react';
import VideoHeader from '../VideoHeader';
import HomeCookingClasses from "../HomeCookingClasses";
import HomeAbout from "../HomeAbout";
import backgroundVideo from '../../videos/videoHeader.mp4';
import logo from "../../images/remodeledForkSpoon.png"

const Home = () => {
    return (
        <div>
            <VideoHeader videoSource={backgroundVideo} endingImage={logo}/>
            <HomeCookingClasses/>
            <HomeAbout/>
        </div>
    );
};

export default Home;