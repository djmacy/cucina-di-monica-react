import React from 'react';
import Header from '../Header';
import backgroundImage from '../../images/MonicaTeaching.jpg';
import Slider from '../Slider';


const Home = () => {
    return (
        <div>
            <Header title="La Cucina Di Monica" backgroundImage={backgroundImage} />
            <p> <Slider/> </p>
        </div>
    );
};

export default Home;