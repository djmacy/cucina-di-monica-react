import React from 'react';
import Header from '../Header';
import backgroundImage from '../../images/MonicaTeaching.jpg';


const Home = () => {
    return (
        <div>
            <Header title="Welcome to My Website" backgroundImage={backgroundImage} />
            <p>This is the home page content.</p>
        </div>
    );
};

export default Home;