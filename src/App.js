// App.js
import React from 'react';
import Navbar from './components/Navbar';
import RoutesComponent from "./Routes";
import Footer from "./components/Footer"


function App() {
    return (
        <div>
            <Navbar/>
            <RoutesComponent/>
            <Footer/>
        </div>
    );
}

export default App;
