import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import "./HomeCookingClasses.css"

//Monicas Favorite Menu Images
import casunziei from "../images/MonicasFavoriteMenu/casunziei.png";
import crostataDiMarmellata from "../images/MonicasFavoriteMenu/crostataDiMarmellata.png";
import focaccia from "../images/MonicasFavoriteMenu/focaccia.png";
//Sicilian
import cannoli from "../images/SicilianMenu/cannoli.png";
import arancini from "../images/SicilianMenu/arancini.png";
import busiateWithTrapanese from "../images/SicilianMenu/busiateWithTrapanesePesto.png";
//Taste of Italy
import risottoAllaMilanese from "../images/TasteOfItaly/risottoAllaMilanese.png";
import lasagneAllaBolognese from "../images/TasteOfItaly/lasagneAllaBolognese.png";
import baciDiDama from "../images/TasteOfItaly/baciDiDama.png";
//Arrays
const monicasFavoriteMenuImages = [focaccia, casunziei, crostataDiMarmellata];
const sicilianMenuImages = [arancini, busiateWithTrapanese, cannoli];
const tasteOfItalyMenuImages = [risottoAllaMilanese, lasagneAllaBolognese, baciDiDama];
const HomeCookingClasses = () => {
    const navigate = useNavigate();

    const handleDiscoverMoreClick = () => {
        // Handle redirection logic or link to another page
        navigate('/courses');
        window.scrollTo(0, 0);
    };

    return(
        <div className='cooking-classes-section'>
            <h2 className='section-title'>Class Favorites</h2>
            <div className='course-cards-container'>
                <CourseCard
                    imageUrl={focaccia}
                    title="Monica's Favorite"
                    id="Monicas Favorite Menu"
                    imageArray={monicasFavoriteMenuImages}
                    duration={"2 Hours"}
                    appetizer={"Focaccia"}
                    firstCourse={"Casunzei"}
                    dessert={"Crostata With Marmalade"}
                />
                <CourseCard
                    imageUrl={lasagneAllaBolognese}
                    title="Taste of Italy"
                    id="Taste of Italy Menu"
                    imageArray={tasteOfItalyMenuImages}
                    duration={"2 Hours"}
                    appetizer={"Risotto Alla Milanese"}
                    firstCourse={"Lasagna Alla Bolognese"}
                    dessert={"Baci Di Dama"}
                />
                <CourseCard
                    imageUrl={cannoli}
                    title="Sicilian"
                    id="Sicilian Menu"
                    imageArray={sicilianMenuImages}
                    duration={"2 Hours"}
                    appetizer={"Arancini"}
                    firstCourse={"Busiate With Trapanese Pesto"}
                    dessert={"Cannoli"}
                />
            </div>
            <h3 className='discover-more' onClick={handleDiscoverMoreClick}>
                Discover More
            </h3>
        </div>
    )
};

export default HomeCookingClasses;