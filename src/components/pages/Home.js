import React from 'react';
import Header from '../Header';
import backgroundImage from '../../images/MonicaTeaching.jpg';


const Home = () => {
    return (
        <div>
            <Header title="La Cucina Di Monica" backgroundImage={backgroundImage} />
            <p></p>
        </div>
    );
};

export default Home;