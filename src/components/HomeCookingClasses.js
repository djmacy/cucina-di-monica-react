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

//Monicas Favorite Description
const monicasFavoriteMenuDescriptions = {
    appetizer : "A classic Italian flatbread, airy and soft on the inside with a golden, crisp crust, generously drizzled with extra virgin olive oil and sprinkled with sea salt and fresh rosemary, perfect as an appetizer or a side dish.",
    firstCourse : "Traditional stuffed pasta from the Dolomites, these half-moon-shaped ravioli are filled with a sweet-savory mixture of roasted red beets, potatoes, and ricotta, served with a sage butter sauce and a sprinkle of poppy seeds.",
    secondCourse : "",
    dessert : "A rustic Italian tart featuring a buttery, crumbly pastry crust filled with a vibrant, tangy marmalade made from seasonal fruits, offering a delightful balance of sweetness and tartness in every bite."
}
//Sicilian  Description
const sicilianMenuDescriptions = {
    appetizer : "Sicilian-style risotto balls, coated in a crispy breadcrumb crust and deep-fried until golden. Filled with a rich mixture of saffron-infused risotto, peas, and meat sauce, they offer a deliciously creamy center with each bite.",
    firstCourse : "A traditional Sicilian pasta, busiate, is served with a vibrant and fresh trapanese pesto made from almonds, tomatoes, basil, garlic, and extra virgin olive oil, creating a flavorful and aromatic sauce.",
    secondCourse : "",
    dessert : "Classic Sicilian pastries featuring crisp, tubular shells filled with a sweet, creamy ricotta cheese filling, often accented with chocolate chips or candied orange peel for an authentic and delightful treat."
}
//Taste of Italy Description
const tasteOfItalyMenuDescriptions = {
    appetizer : "A luxurious Milanese risotto made with Arborio rice, infused with aromatic saffron and cooked in a rich beef broth, finished with a generous grating of Parmigiano-Reggiano for a creamy, golden dish with a delicate flavor.",
    firstCourse : "A classic Italian lasagna layered with tender sheets of pasta, a hearty Bolognese sauce made from slow-cooked beef, tomatoes, and vegetables, and creamy béchamel sauce, all baked to perfection with a topping of melted cheese.",
    secondCourse : "",
    dessert : "Delightful, bite-sized almond cookies from Piedmont, featuring a tender, crumbly texture and a rich hazelnut filling sandwiched between two delicate cookies, offering a sweet and nutty finish to any meal."
}
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
                    description={monicasFavoriteMenuDescriptions}
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
                    description={tasteOfItalyMenuDescriptions}
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
                    description={sicilianMenuDescriptions}
                />
            </div>
            <h3 className='discover-more' onClick={handleDiscoverMoreClick}>
                Discover More
            </h3>
        </div>
    )
};

export default HomeCookingClasses;