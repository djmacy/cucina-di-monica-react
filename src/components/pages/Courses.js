import React, {useEffect, useState} from 'react';
import backgroundImage from "../../images/MonicaTeaching.jpg";
import Header from "../Header";
import CourseCard from "../CourseCard";
import './Courses.css';

//Fall Menu Images
import butternutSquashRavioli from "../../images/FallMenu/butternutSquashRavioli.png";
import pumpkinAndCinnamonCake from "../../images/FallMenu/pumpkinAndCinnamonCake.png";
import pumpkinBread from "../../images/FallMenu/pumpkinBread.png";
import pumpkinFlan from "../../images/FallMenu/pumpkinFlan.png";
//Forest Menu Images
import appleStrudel from "../../images/ForestMenu/appleStrudel.png";
import gulaschAndPolenta from "../../images/ForestMenu/gulaschAndPolenta.png";
import pappardelleWithPorciniMushrooms from "../../images/ForestMenu/pappardelleWithPorciniMushrooms.png";
//Gnocchi Menu Images
import gnocchettiSardiWithArugulaPesto from "../../images/GnocchiMenu/gnocchettiSardiWithArugulaPesto.png";
import gnocchiWithBeefRagu from "../../images/GnocchiMenu/gnocchiWithBeefRagù.png";
import pannaCottaWithBerries from "../../images/GnocchiMenu/pannaCottaWithBerries.png";
import rabatonAlessandrini from "../../images/GnocchiMenu/rabatonAlessandrini(RicottaAndSpinachGnocchi).png";
//Ligure Menu
import focacciaDiRecco from "../../images/LigureMenu/focacciaDiRecco.jpeg";
import minestroneGenovese from "../../images/LigureMenu/minestroneGenoveseWithBasilPesto.jpeg";
import filledVegetables from "../../images/LigureMenu/filledVegetables.jpeg";
import ravioliAllaBoragine from "../../images/LigureMenu/ravioliAllaBoragine.jpeg";
import tortaDellaNonna from "../../images/LigureMenu/Torta della nonna.jpeg";
//Nonno Menu
import fricoFriulano from "../../images/NonnoMenu/fricoFriulano.jpeg";
import tortelliniInBroth from "../../images/NonnoMenu/TortelliniInBroth.jpeg";
import savoryCrumbleWithZucchiniAndSpeck from "../../images/NonnoMenu/savoryCrumbleWithZucchini&Speck.jpeg";
import cantucciBiscotti from "../../images/NonnoMenu/cantucciBiscotti.jpeg";
//Summertime Menu
import caponata from "../../images/SummertimeMenu/caponata.jpg";
import cavatelliWithBasilPesto from "../../images/SummertimeMenu/cavatelliWithBasilPesto.jpeg";
import polloAllaRomana from "../../images/SummertimeMenu/polloAllaRomana.jpeg";
import tortaCaprese from "../../images/SummertimeMenu/tortaCaprese.jpg";
//Monicas Favorite Menu Images
import casunziei from "../../images/MonicasFavoriteMenu/casunziei.png";
import crostataDiMarmellata from "../../images/MonicasFavoriteMenu/crostataDiMarmellata.png";
import focaccia from "../../images/MonicasFavoriteMenu/focaccia.png";
//Roma Menu Images
import maritozzi from "../../images/RomaMenu/maritozzi.png";
import rigatoniAllAmatriciana from "../../images/RomaMenu/rigatoniAllAmatriciana.png";
import saltimbocca from "../../images/RomaMenu/saltimbocca.png";
import suppliAllaRomana from "../../images/RomaMenu/supplìAllaRomana.png";
//SeasonalMenu Images
import savoryBread from "../../images/SeasonalMenu/savoryBread.png";
import lasagnaWithBaconAndBroccoli from "../../images/SeasonalMenu/lasagnaWithBaconAndBrocolli.png";
import zeppoleDiSanGiusseppe from "../../images/SeasonalMenu/zeppoleDiSanGiuseppe.png";
import bruschettaAlPomodoro from "../../images/SeasonalMenu/bruschettaAlPomodoro.jpg";
import risottoWithZucchiniAndSaffron from "../../images/SeasonalMenu/risottoAlleZucchineSaffron.jpeg";
import lemonChicken from "../../images/SeasonalMenu/lemonChicken.jpeg";
import lemonAndRicottaCake from "../../images/SeasonalMenu/lemonaAndRicottaCake.jpeg";

//Sicilian Menu Images
import arancini from "../../images/SicilianMenu/arancini.png";
import busiateWithTrapanese from "../../images/SicilianMenu/busiateWithTrapanesePesto.png";
import cannoli from "../../images/SicilianMenu/cannoli.png";
//Spring Menu
import fruitAndCreamTart from "../../images/SpringMenu/fruitAndCreamTart.png";
import crespelleWithCheeseAndSpinach from "../../images/SpringMenu/crespelleWithCheeseAndSpinach.png";
import savoryCroissant from "../../images/SpringMenu/savoryCroissant.png";
//Taste of Italy Menu
import baciDiDama from "../../images/TasteOfItaly/baciDiDama.png";
import lasagneAllaBolognese from "../../images/TasteOfItaly/lasagneAllaBolognese.png";
import risottoAllaMilanese from "../../images/TasteOfItaly/risottoAllaMilanese.png";
//Thats Amore Menu
import danubioSalato from "../../images/ThatsAmoreMenu/danubioSalato.png";
import eggplantParmigiana from "../../images/ThatsAmoreMenu/eggplantParmigiana.png";
import heartShapedFilledPasta from "../../images/ThatsAmoreMenu/heartShapedFilledPasta.png";
import strawberryTiramisu from "../../images/ThatsAmoreMenu/strawberryTiramisù.png";
//Vegetarian Menu
import pastaAllaNorma from "../../images/VegetarianMenu/pastaAllaNorma.png";
import pistacchioTiramisu from "../../images/VegetarianMenu/pistacchioTiramisù.png"
import spaghettiAllaChittara from "../../images/VegetarianMenu/spaghettiAllaChittarraWithLemonSauce.png";
import pestoBraidedBread from "../../images/VegetarianMenu/pestoBraidedBread.jpg";
import zucchiniQuiche from "../../images/VegetarianMenu/zucchiniQuiche.jpg";
//Veneto Menu
import bigoliWithWhiteRagu from "../../images/VenetoMenu/bigoliWithWhiteRagùSauce.png";
import braidedBreadWithSorpressaAndAsiage from "../../images/VenetoMenu/braidedBreadWithSopressaAndAsiagoCheese.png";
import tiramisu from "../../images/VenetoMenu/tiramisù.png";
import LineText from "../LineText";

//import app from "../../App";

//menuArrays
const fallMenuImages = [pumpkinBread, pumpkinFlan, butternutSquashRavioli, pumpkinAndCinnamonCake];
const forestMenuImages = [gulaschAndPolenta, pappardelleWithPorciniMushrooms, appleStrudel];
const gnocchiMenuImages = [gnocchettiSardiWithArugulaPesto, gnocchiWithBeefRagu, rabatonAlessandrini, pannaCottaWithBerries];
const ligureMenuImages = [focacciaDiRecco, minestroneGenovese, filledVegetables, tortaDellaNonna];
const summertimeMenuImages = [caponata, cavatelliWithBasilPesto, polloAllaRomana, tortaCaprese];
const nonnoMenuImages = [fricoFriulano, tortelliniInBroth, savoryCrumbleWithZucchiniAndSpeck, cantucciBiscotti];
const monicasFavoriteMenuImages = [focaccia, casunziei, crostataDiMarmellata];
const romeMenuImages= [suppliAllaRomana, rigatoniAllAmatriciana, saltimbocca, maritozzi];
const seasonalMenuImages = [bruschettaAlPomodoro, risottoWithZucchiniAndSaffron, lemonChicken, lemonAndRicottaCake];
const sicilianMenuImages = [arancini, busiateWithTrapanese, cannoli];
const springMenuImages = [savoryCroissant, crespelleWithCheeseAndSpinach, fruitAndCreamTart];
const tasteOfItalyMenuImages = [risottoAllaMilanese, lasagneAllaBolognese, baciDiDama];
const thatsAmoreMenuImages = [danubioSalato, heartShapedFilledPasta, eggplantParmigiana, strawberryTiramisu];
const vegetarianMenuImages = [pestoBraidedBread, zucchiniQuiche, spaghettiAllaChittara, pistacchioTiramisu];
const venetoMenuImages = [braidedBreadWithSorpressaAndAsiage, bigoliWithWhiteRagu, tiramisu];
const Courses = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initialize with current window width

    // Function to handle window resize
    const handleResize = () => {
        setWindowWidth(window.innerWidth); // Update window width state

    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    if (window.innerWidth > 850) {
        return (
            <div>
                <Header backgroundImage={backgroundImage} title="Courses"/>


                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={pumpkinBread}
                        title="Fall Menu"
                        id="Fall Card"
                        imageArray={fallMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Pumpkin Bread"}
                        firstCourse={"Pumpkin Flan"}
                        secondCourse={"Butternut Squash Ravioli"}
                        dessert={"Pumpkin and \nCinnamon Cake"}
                    />
                    <CourseCard
                        imageUrl={appleStrudel}
                        title="Forest Menu"
                        id="Forest Menu"
                        imageArray={forestMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Gulasch And Polenta"}
                        firstCourse={"Pappardelle With \nPorcini Mushrooms"}
                        dessert={"Apple Strudel"}
                    />
                    <CourseCard
                        imageUrl={gnocchiWithBeefRagu}
                        title="Gnocchi Menu"
                        id="Gnocchi Menu"
                        imageArray={gnocchiMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Gnocchetti Sardi \nWith Arugula Pesto"}
                        firstCourse={"Gnocchi With Beef Ragù"}
                        secondCourse={"Rabaton Alessandrini"}
                        dessert={"Panna Cotta With Berries"}
                    />
                    <CourseCard
                        imageUrl={focaccia}
                        title="Monicas Favorite Menu"
                        id="Monicas Favorite Menu"
                        imageArray={monicasFavoriteMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia"}
                        firstCourse={"Casunzei"}
                        dessert={"Crostata With Marmalade"}
                    />
                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={maritozzi}
                        title="Roma Menu"
                        id="Roma Menu"
                        imageArray={romeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Supplì Alla Romana"}
                        firstCourse={"Rigatoni all'Amatriciana"}
                        secondCourse={"Saltimbocca"}
                        dessert={"Maritozzi"}
                    />
                    <CourseCard
                        imageUrl={cannoli}
                        title="Sicilian Menu"
                        id="Sicilian Menu"
                        imageArray={sicilianMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Arancini"}
                        firstCourse={"Busiate With Trapanese Pesto"}
                        dessert={"Cannoli"}
                    />
                    <CourseCard
                        imageUrl={fruitAndCreamTart}
                        title="Spring Menu"
                        id="Spring Menu"
                        imageArray={springMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Savory Croissant"}
                        firstCourse={"Crespelle With Cheese \nand Spinach"}
                        dessert={"Fruit and Cream Tart"}
                    />
                    <CourseCard
                        imageUrl={lasagneAllaBolognese}
                        title="Taste of Italy Menu"
                        id="Taste of Italy Menu"
                        imageArray={tasteOfItalyMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Risotto Alla Milanese"}
                        firstCourse={"Lasagna Alla Bolognese"}
                        dessert={"Baci Di Dama"}
                    />
                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={heartShapedFilledPasta}
                        title="Thats Amore Menu"
                        id="Thats Amore Menu"
                        imageArray={thatsAmoreMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Danubio Salato"}
                        firstCourse={"Heart-Shaped Filled Pasta"}
                        secondCourse={"Eggplant Parmigiana"}
                        dessert={"Strawberry Tiramisù"}
                    />
                    <CourseCard
                        imageUrl={pestoBraidedBread}
                        title="Vegetarian Menu"
                        id="Vegetarian Menu"
                        imageArray={vegetarianMenuImages}
                        duration={"2 Hours"}
                        appetizer="Pesto Braided Bread"
                        firstCourse="Zucchini Quiche"
                        secondCourse="Spaghetti Alla Chitarra"
                        dessert="Pistacchio Tiramisù"
                    />
                    <CourseCard
                        imageUrl={tiramisu}
                        title="Veneto Menu"
                        id="Veneto Menu"
                        imageArray={venetoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Braided Bread With \nSorpressa and Asiago"}
                        firstCourse="Bigoli With White Ragù"
                        dessert={"Tiramisù"}
                    />
                    <CourseCard
                        imageUrl={bruschettaAlPomodoro}
                        title="Seasonal Menu"
                        id="Seasonal Menu"
                        imageArray={seasonalMenuImages}
                        duration="2 Hours"
                        appetizer="Bruschetta al Pomodoro"
                        firstCourse={"Risotto with Zucchini \nand Saffron"}
                        secondCourse="Lemon Chicken"
                        dessert="Lemon and Ricotta Cake"
                    />
                </div>
                <LineText text="New Additions"/>

                <div className="course-cards-container">

                    <CourseCard
                        imageUrl={focacciaDiRecco}
                        title="Ligure Menu"
                        id="Ligure Menu"
                        imageArray={ligureMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia di Recco"}
                        firstCourse={"Minestrone Genovese"}
                        secondCourse={"Filled Vegetables"}
                        dessert={"Torta della Nonna"}
                    />
                    <CourseCard
                        imageUrl={tortelliniInBroth}
                        title="Nonno Menu"
                        id="Nonno Menu"
                        imageArray={nonnoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Frico Frulano"}
                        firstCourse={"Tortellini in Broth"}
                        secondCourse={"Savory Crumble with \nZucchini and Speck"}
                        dessert={"Cantucci Biscotti"}
                    />
                    <CourseCard
                        imageUrl={caponata}
                        title="Summertime Menu"
                        id="Summertime Menu"
                        imageArray={summertimeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Caponata"}
                        firstCourse={"Cavatelli with Basil Pesto"}
                        secondCourse={"Pollo alla Romana"}
                        dessert={"Torta Caprese"}
                    />
                </div>
                <LineText text="Cocktails"/>


            </div>

        );
    } else {
        return (
            <div>
                <Header backgroundImage={backgroundImage} title="Courses"/>

                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={pumpkinBread}
                        title="Fall Menu"
                        id="Fall Card"
                        imageArray={fallMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Pumpkin Bread"}
                        firstCourse={"Pumpkin Flan"}
                        secondCourse={"Butternut Squash Ravioli"}
                        dessert={"Pumpkin and \nCinnamon Cake"}
                    />
                    <CourseCard
                        imageUrl={appleStrudel}
                        title="Forest Menu"
                        id="Forest Menu"
                        imageArray={forestMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Gulasch And Polenta"}
                        firstCourse={"Pappardelle With \nPorcini Mushrooms"}
                        dessert={"Apple Strudel"}
                    />
                    <CourseCard
                        imageUrl={gnocchiWithBeefRagu}
                        title="Gnocchi Menu"
                        id="Gnocchi Menu"
                        imageArray={gnocchiMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Gnocchetti Sardi \nWith Arugula Pesto"}
                        firstCourse={"Gnocchi With Beef Ragù"}
                        secondCourse={"Rabaton Alessandrini"}
                        dessert={"Panna Cotta With Berries"}
                    />

                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={focaccia}
                        title="Monicas Favorite Menu"
                        id="Monicas Favorite Menu"
                        imageArray={monicasFavoriteMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia"}
                        firstCourse={"Casunzei"}
                        dessert={"Crostata With Marmalade"}
                    />
                    <CourseCard
                        imageUrl={maritozzi}
                        title="Roma Menu"
                        id="Roma Menu"
                        imageArray={romeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Supplì Alla Romana"}
                        firstCourse={"Rigatoni all'Amatriciana"}
                        secondCourse={"Saltimbocca"}
                        dessert={"Maritozzi"}
                    />
                    <CourseCard
                        imageUrl={cannoli}
                        title="Sicilian Menu"
                        id="Sicilian Menu"
                        imageArray={sicilianMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Arancini"}
                        firstCourse={"Busiate With Trapanese Pesto"}
                        dessert={"Cannoli"}
                    />


                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={fruitAndCreamTart}
                        title="Spring Menu"
                        id="Spring Menu"
                        imageArray={springMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Savory Croissant"}
                        firstCourse={"Crespelle With Cheese \nand Spinach"}
                        dessert={"Fruit and Cream Tart"}
                    />
                    <CourseCard
                        imageUrl={lasagneAllaBolognese}
                        title="Taste of Italy Menu"
                        id="Taste of Italy Menu"
                        imageArray={tasteOfItalyMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Risotto Alla Milanese"}
                        firstCourse={"Lasagna Alla Bolognese"}
                        dessert={"Baci Di Dama"}
                    />
                    <CourseCard
                        imageUrl={heartShapedFilledPasta}
                        title="Thats Amore Menu"
                        id="Thats Amore Menu"
                        imageArray={thatsAmoreMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Danubio Salato"}
                        firstCourse={"Heart-Shaped Filled Pasta"}
                        secondCourse={"Eggplant Parmigiana"}
                        dessert={"Strawberry Tiramisù"}
                    />
                </div>
                <div className="course-cards-container">

                    <CourseCard
                        imageUrl={pestoBraidedBread}
                        title="Vegetarian Menu"
                        id="Vegetarian Menu"
                        imageArray={vegetarianMenuImages}
                        duration={"2 Hours"}
                        appetizer="Pesto Braided Bread"
                        firstCourse="Zucchini Quiche"
                        secondCourse="Spaghetti Alla Chitarra"
                        dessert="Pistacchio Tiramisù"
                    />
                    <CourseCard
                        imageUrl={tiramisu}
                        title="Veneto Menu"
                        id="Veneto Menu"
                        imageArray={venetoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Braided Bread With \nSorpressa and Asiago"}
                        firstCourse="Bigoli With White Ragù"
                        dessert={"Tiramisù"}
                    />
                    <CourseCard
                        imageUrl={bruschettaAlPomodoro}
                        title="Seasonal Menu"
                        id="Seasonal Menu"
                        imageArray={seasonalMenuImages}
                        duration="2 Hours"
                        appetizer="Bruschetta al Pomodoro"
                        firstCourse={"Risotto with Zucchini \nand Saffron"}
                        secondCourse="Lemon Chicken"
                        dessert="Lemon and Ricotta Cake"
                    />
                </div>
                <LineText text="New Additions"/>

                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={focacciaDiRecco}
                        title="Ligure Menu"
                        id="Ligure Menu"
                        imageArray={ligureMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia di Recco"}
                        firstCourse={"Minestrone Genovese"}
                        secondCourse={"Filled Vegetables"}
                        dessert={"Torta della Nonna"}
                    />
                    <CourseCard
                        imageUrl={tortelliniInBroth}
                        title="Nonno Menu"
                        id="Nonno Menu"
                        imageArray={nonnoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Frico Frulano"}
                        firstCourse={"Tortellini in Broth"}
                        secondCourse={"Savory Crumble with \nZucchini and Speck"}
                        dessert={"Cantucci Biscotti"}
                    />
                    <CourseCard
                        imageUrl={caponata}
                        title="Summertime Menu"
                        id="Summertime Menu"
                        imageArray={summertimeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Caponata"}
                        firstCourse={"Cavatelli with Basil Pesto"}
                        secondCourse={"Pollo alla Romana"}
                        dessert={"Torta Caprese"}
                    />
                </div>
                <LineText text="Cocktails"/>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={focacciaDiRecco}
                        title="Ligure Menu"
                        id="Ligure Menu"
                        imageArray={ligureMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia di Recco"}
                        firstCourse={"Minestrone Genovese"}
                        secondCourse={"Filled Vegetables"}
                        dessert={"Torta della Nonna"}
                    />
                    <CourseCard
                        imageUrl={tortelliniInBroth}
                        title="Nonno Menu"
                        id="Nonno Menu"
                        imageArray={nonnoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Frico Frulano"}
                        firstCourse={"Tortellini in Broth"}
                        secondCourse={"Savory Crumble with \nZucchini and Speck"}
                        dessert={"Cantucci Biscotti"}
                    />
                    <CourseCard
                        imageUrl={caponata}
                        title="Summertime Menu"
                        id="Summertime Menu"
                        imageArray={summertimeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Caponata"}
                        firstCourse={"Cavatelli with Basil Pesto"}
                        secondCourse={"Pollo alla Romana"}
                        dessert={"Torta Caprese"}
                    />
                </div>
            </div>
        );
    }

};

export default Courses;