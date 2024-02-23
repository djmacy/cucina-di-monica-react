import React from 'react';
import backgroundImage from "../../images/MonicaTeaching.jpg";
import Header from "../Header";
import Slider from "../Slider"
import CourseCard from "../CourseCard";
import './Courses.css';

//import images for rome menu
import img1 from "../../images/MonicaTeaching.jpg";
import img2 from "../../images/MonicaFavicon.png";
import img3 from "../../images/MonicaSmiling.jpg";
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
//Monicas Favorite Menu Images
import casunziei from "../../images/MonicasFavoriteMenu/casunziei.png";
import crostataDiMarmellata from "../../images/MonicasFavoriteMenu/crostataDiMarmellata.png";
import focaccia from "../../images/MonicasFavoriteMenu/focaccia.png";
//Roma Menu Images
import maritozzi from "../../images/RomaMenu/maritozzi.png";
import rigatoniAllAmatriciana from "../../images/RomaMenu/rigatoniAllAmatriciana.png";
import saltimbocca from "../../images/RomaMenu/saltimbocca.png";
import suppliAllaRomana from "../../images/RomaMenu/supplìAllaRomana.png";
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
//Veneto Menu
import bigoliWithWhiteRagu from "../../images/VenetoMenu/bigoliWithWhiteRagùSauce.png";
import braidedBreadWithSorpressaAndAsiage from "../../images/VenetoMenu/braidedBreadWithSopressaAndAsiagoCheese.png";
import tiramisu from "../../images/VenetoMenu/tiramisù.png";

//import app from "../../App";

//menuArrays
const fallMenuImages = [pumpkinBread, pumpkinFlan, butternutSquashRavioli, pumpkinAndCinnamonCake];
const forestMenuImages = [gulaschAndPolenta, pappardelleWithPorciniMushrooms, appleStrudel];
const gnocchiMenuImages = [gnocchettiSardiWithArugulaPesto, gnocchiWithBeefRagu, rabatonAlessandrini, pannaCottaWithBerries];
const monicasFavoriteMenuImages = [focaccia, casunziei, crostataDiMarmellata];
const romeMenuImages= [suppliAllaRomana, rigatoniAllAmatriciana, saltimbocca, maritozzi];
const sicilianMenuImages = [arancini, busiateWithTrapanese, cannoli];
const springMenuImages = [savoryCroissant, crespelleWithCheeseAndSpinach, fruitAndCreamTart];
const tasteOfItalyMenuImages = [risottoAllaMilanese, lasagneAllaBolognese, baciDiDama];
const thatsAmoreMenuImages = [danubioSalato, heartShapedFilledPasta, eggplantParmigiana, strawberryTiramisu];
const vegetarianMenuImages = [pastaAllaNorma, spaghettiAllaChittara, pistacchioTiramisu];
const venetoMenuImages = [braidedBreadWithSorpressaAndAsiage, bigoliWithWhiteRagu, tiramisu];
const Courses = () => {
    return (
        <div>
            <Header backgroundImage={backgroundImage} title="Courses"/>
            <div className="course-cards-container">
                <CourseCard imageUrl={pumpkinBread} title="Fall Menu" id="Fall Card" imageArray={fallMenuImages}/>
                <CourseCard imageUrl={appleStrudel} title="Forest Menu" id="Forest Menu" imageArray={forestMenuImages}/>
                <CourseCard imageUrl={gnocchiWithBeefRagu} title="Gnocchi Menu" id="Gnocchi Menu" imageArray={gnocchiMenuImages}/>
                <CourseCard imageUrl={focaccia} title="Monicas Favorite Menu" id="Monicas Favorite Menu" imageArray={monicasFavoriteMenuImages}/>
                <CourseCard imageUrl={saltimbocca} title="Roma Menu" id="Roma Menu" imageArray={romeMenuImages}/>
                <CourseCard imageUrl={cannoli} title="Sicilian Menu" id="Sicilian Menu" imageArray={sicilianMenuImages}/>
            </div>
            <div className="course-cards-container">
                <CourseCard imageUrl={fruitAndCreamTart} title="Spring Menu" id="Spring Menu" imageArray={springMenuImages}/>
                <CourseCard imageUrl={lasagneAllaBolognese} title="Taste of Italy Menu" id="Taste of Italy Menu" imageArray={tasteOfItalyMenuImages}/>
                <CourseCard imageUrl={heartShapedFilledPasta} title="Thats Amore Menu" id="Thats Amore Menu" imageArray={thatsAmoreMenuImages}/>
                <CourseCard imageUrl={spaghettiAllaChittara} title="Vegetarian Menu" id="Vegetarian Menu" imageArray={vegetarianMenuImages}/>
                <CourseCard imageUrl={tiramisu} title="Veneto Menu" id="Veneto Menu" imageArray={venetoMenuImages}/>
            </div>
            {/*<Slider imageList={romeMenuImages} courseName="Rome Menu" />*/}
        </div>
    );
};

export default Courses;