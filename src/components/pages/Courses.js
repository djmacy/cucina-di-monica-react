import React, {useEffect, useState} from 'react';
import backgroundImage from "../../images/MonicaTeaching.jpg";
import Header from "../Header";
import CourseCard from "../CourseCard";
import './Courses.css';

//cocktails
import hugo from "../../images/Cocktails/hugo.jpg";
import aperolSpritz from "../../images/Cocktails/aperolSpritz.jpg"
import campariSpritz from "../../images/Cocktails/campariSpritz.jpg"
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
//import rabatonAlessandrini from "../../images/GnocchiMenu/rabatonAlessandrini(RicottaAndSpinachGnocchi).png";
import gnocchiAllaRomana from "../../images/GnocchiMenu/gnocchiAllaRomana.jpeg";
//Ligure Menu
//import focacciaDiRecco from "../../images/LigureMenu/focacciaDiRecco.jpeg";
import focaccia from "../../images/MonicasFavoriteMenu/focaccia.png";
import minestroneGenovese from "../../images/LigureMenu/minestroneGenoveseWithBasilPesto.jpeg";
import filledVegetables from "../../images/LigureMenu/filledVegetables.jpeg";
//import ravioliAllaBoragine from "../../images/LigureMenu/ravioliAllaBoragine.jpeg";
import tortaDellaNonna from "../../images/LigureMenu/Torta della nonna.jpeg";
//Nonno Menu
import fricoFriulano from "../../images/NonnoMenu/fricoFriulano.jpeg";
import tortelliniInBroth from "../../images/NonnoMenu/TortelliniInBroth.jpeg";
import savoryCrumbleWithZucchiniAndSpeck from "../../images/NonnoMenu/savoryCrumbleWithZucchini&Speck.jpeg";
import cantucciBiscotti from "../../images/NonnoMenu/cantucciBiscotti.jpeg";

//Piemontese Menu
import insalataRussa from "../../images/PiemonteseMenu/insalataRussa.jpeg";
import agnolottiDelPlin from "../../images/PiemonteseMenu/agnolottiDelPlin.jpeg";
import tajarin from "../../images/PiemonteseMenu/tajarin.jpeg";
import baciDiDama from "../../images/PiemonteseMenu/baciDiDama.png"

//Summertime Menu
import caponata from "../../images/SummertimeMenu/caponata.jpg";
import cavatelliWithBasilPesto from "../../images/SummertimeMenu/cavatelliWithBasilPesto.jpeg";
import polloAllaRomana from "../../images/SummertimeMenu/polloAllaRomana.jpeg";
import tortaCaprese from "../../images/SummertimeMenu/tortaCaprese.jpg";
//Monicas Favorite Menu Images
import piadinaRomagnola from "../../images/MonicasFavoriteMenu/piadinaRomagnola.jpg"
import cannelloni from "../../images/MonicasFavoriteMenu/cannelloniRicottaSpinach.jpg"
import casunziei from "../../images/MonicasFavoriteMenu/casunziei.png";
import crostataDiMarmellata from "../../images/MonicasFavoriteMenu/crostataDiMarmellata.png";

//Lombardo Menu Images
import sciattValtellinesi from "../../images/LombardoMenu/sciattValtellinesi.jpeg";
import pizzoccheri from  "../../images/LombardoMenu/pizzoccheri.jpeg";
import casoncelliAllaBergamasa from "../../images/LombardoMenu/casoncelliAllaBergamasca.jpeg";
import tortaSbrisolona from "../../images/LombardoMenu/tortaSbrisolona.jpeg";

//Roma Menu Images
import maritozzi from "../../images/RomaMenu/maritozzi.png";
import spaghettiAlAmatriciana from "../../images/RomaMenu/spaghettiAlAmatriciana.jpg";
//import rigatoniAllAmatriciana from "../../images/RomaMenu/rigatoniAllAmatriciana.png";
import saltimbocca from "../../images/RomaMenu/saltimbocca.png";
import suppliAllaRomana from "../../images/RomaMenu/supplìAllaRomana.png";
//SeasonalMenu Images
//import savoryBread from "../../images/SeasonalMenu/savoryBread.png";
//import lasagnaWithBaconAndBroccoli from "../../images/SeasonalMenu/lasagnaWithBaconAndBrocolli.png";
//import zeppoleDiSanGiusseppe from "../../images/SeasonalMenu/zeppoleDiSanGiuseppe.png";
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
//import baciDiDama from "../../images/TasteOfItaly/baciDiDama.png";
import lasagneAllaBolognese from "../../images/TasteOfItaly/lasagneAllaBolognese.png";
import risottoAllaMilanese from "../../images/TasteOfItaly/risottoAllaMilanese.png";
import crostataCremaFrutta from "../../images/TasteOfItaly/crostataCremaFrutta.jpeg";
//Thats Amore Menu
import danubioSalato from "../../images/ThatsAmoreMenu/danubioSalato.png";
import eggplantParmigiana from "../../images/ThatsAmoreMenu/eggplantParmigiana.png";
import heartShapedFilledPasta from "../../images/ThatsAmoreMenu/heartShapedFilledPasta.png";
import strawberryTiramisu from "../../images/ThatsAmoreMenu/strawberryTiramisù.png";
//Toscano Menu
import panzanellaSalad from "../../images/ToscanoMenu/panzanellaSalad.jpeg";
import schiacciataAllOlio from "../../images/ToscanoMenu/schiacciataAllOlio.jpeg";
import ribollita from "../../images/ToscanoMenu/ribollita.jpeg";
import ricciarelliDiSiena from "../../images/ToscanoMenu/ricciarelliDiSiena.jpeg"

//Vegetarian Menu
import pastaAllaNorma from "../../images/VegetarianMenu/pastaAllaNorma.png";
import pistacchioTiramisu from "../../images/VegetarianMenu/pistacchioTiramisù.png"
import garganelli from "../../images/VegetarianMenu/garganelli.jpg"
import spaghettiAllaChittara from "../../images/VegetarianMenu/spaghettiAllaChittarraWithLemonSauce.png";
import pestoBraidedBread from "../../images/VegetarianMenu/pestoBraidedBread.jpg";
import zucchiniQuiche from "../../images/VegetarianMenu/zucchiniQuiche.jpg";
//Veneto Menu
import bigoliWithWhiteRagu from "../../images/VenetoMenu/bigoliWithWhiteRagùSauce.png";
import braidedBreadWithSorpressaAndAsiage from "../../images/VenetoMenu/braidedBreadWithSopressaAndAsiagoCheese.png";
import tiramisu from "../../images/VenetoMenu/tiramisù.png";
import LineText from "../LineText";

/// Descriptions
//Fall Menu Description
const fallMenuDescriptions = {
    appetizer : "A moist and spiced loaf made with fresh pumpkin puree, enriched with warm spices like cinnamon, nutmeg, and cloves, and often topped with a sprinkle of nuts or seeds for added texture and flavor.",
    firstCourse : "A velvety, caramelized custard dessert featuring the rich flavor of pumpkin and a hint of spice, baked to perfection and served with a smooth caramel sauce for a sweet and indulgent treat.",
    secondCourse : "Delicate pasta pockets filled with a creamy mixture of roasted butternut squash, Parmesan cheese, and aromatic herbs, served with a light brown butter sauce and a sprinkle of sage for a comforting and flavorful dish.",
    dessert : "A tender, spiced cake combining the sweetness of pumpkin with the warmth of cinnamon, often topped with a cream cheese frosting or a dusting of powdered sugar for a delightful and seasonal dessert."
}
//Forest Menu Description
const forestMenuDescriptions = {
    appetizer : "Spezzatino is a traditional Italian stew made with tender chunks of meat, slow-cooked with vegetables like carrots, onions, and celery in a flavorful sauce of wine, broth, or tomato. Often served with polenta, mashed potatoes, or bread, it’s a hearty and comforting dish.",
    firstCourse : "Wide, ribbon-like pappardelle pasta served with a rich and earthy porcini mushroom sauce, made with sautéed mushrooms, garlic, white wine, and finished with a touch of cream, creating a luxurious and flavorful dish.",
    secondCourse : "",
    dessert : "A classic pastry filled with spiced apples, raisins, and cinnamon, wrapped in a thin, crispy dough and baked to perfection. It’s often served warm with a dusting of powdered sugar and a side of vanilla ice cream or whipped cream for a delightful dessert."
}
//Gnocchi Menu Description
const gnocchiMenuDescriptions = {
    appetizer : "Delicate, shell-shaped pasta from Sardinia, tossed in a vibrant arugula pesto made with fresh arugula, pine nuts, garlic, Parmigiano-Reggiano, and extra virgin olive oil, offering a peppery twist on a classic sauce.",
    firstCourse : "Soft, pillowy potato gnocchi paired with a hearty, slow-cooked beef ragu, rich with tomatoes, red wine, and aromatic herbs, creating a comforting and satisfying dish.",
    secondCourse : "A comforting Roman dish made with semolina flour, milk, butter, and Parmesan cheese, shaped into small rounds and baked until golden and crispy on top. These delicate, tender gnocchi are often served with a simple butter and sage sauce or a sprinkling of more cheese, making for a rich and satisfying meal.",
    dessert : "A silky, creamy dessert originating from Piedmont, made with sweetened cream and vanilla, set to perfection and served with a medley of fresh, seasonal berries for a refreshing finish."
}

//Ligure Description
const ligureMenuDescriptions = {
    appetizer : "A classic Italian flatbread, airy and soft on the inside with a golden, crisp crust, generously drizzled with extra virgin olive oil and sprinkled with sea salt and fresh rosemary, perfect as an appetizer or a side dish.",
    firstCourse : "A hearty vegetable soup from Genoa, packed with a variety of seasonal vegetables like carrots, potatoes, beans, and cabbage, simmered in a flavorful broth and often enriched with pesto for a vibrant, herbal finish.",
    secondCourse : "A traditional Ligurian dish featuring a selection of vegetables such as zucchini, peppers, and eggplant, stuffed with a savory mixture of breadcrumbs, herbs, and cheese, then baked until tender and flavorful.",
    dessert : "A classic Italian dessert from Liguria, this \"Grandmother's Cake\" is a creamy custard tart with a buttery, crisp pastry crust, often garnished with pine nuts and powdered sugar, offering a comforting and indulgent treat."
}
//Lombardo Description
const lombardoMenuDescriptions = {
    appetizer: "A specialty from the Valtellina region in Lombardy, Sciatt are savory fritters made from a buckwheat batter filled with melted cheese, typically Casera. These crispy, golden-brown morsels are served hot, often as an appetizer, and provide a delightful contrast between the crunchy exterior and gooey cheese inside.",
    firstCourse : "A hearty pasta dish from the Valtellina region, Pizzoccheri is made with buckwheat flour and traditionally served with a mix of potatoes, Savoy cabbage, and melted cheese, usually Valtellina Casera, all brought together with a generous helping of garlic-infused butter. This rustic dish is a comforting favorite during the colder months.",
    secondCourse : "A beloved dish from Bergamo in Lombardy, Casoncelli are crescent-shaped pasta filled with a unique mixture of meats, breadcrumbs, and often amaretti cookies. They are typically served with a simple yet flavorful sauce of browned butter, sage, and pancetta, creating a perfect balance of sweet and savory.",
    dessert: "A traditional dessert from Mantua in Lombardy, Torta Sbrisolona is a crumbly, rustic cake made with a mixture of cornmeal, almonds, and butter. Its name comes from the Italian word \"sbriciolare,\" meaning to crumble, as it’s meant to be broken into pieces by hand rather than sliced. Often enjoyed with a glass of sweet wine, this cake offers a delightful contrast between its crunchy texture and rich, buttery flavor."
}

//Nonno Description
const nonnoMenuDescriptions = {
    appetizer : "A traditional dish from Friuli-Venezia Giulia featuring crispy, golden cheese pancakes made from a mix of aged Montasio cheese and potatoes, often served with a side of polenta or a fresh salad for a satisfying and savory treat.",
    firstCourse : "A comforting classic from Emilia-Romagna, this dish features delicate, handmade tortellini stuffed with a rich filling of meat or cheese, served in a clear, flavorful broth, offering a warm and nourishing experience.",
    secondCourse : "A delightful, savory twist on the traditional crumble, featuring a topping of buttery, crumbly pastry over a mixture of sautéed zucchini and speck (cured ham), creating a satisfying combination of textures and flavors.",
    dessert : "Traditional Tuscan almond cookies, also known as cantucci, which are twice-baked for extra crunch and flavor. These crisp, slightly sweet biscotti are perfect for dipping in a glass of Vin Santo or enjoying on their own."
}
//Piemonte
const piemonteMenuDescriptions = {
    appetizer: "A popular appetizer with roots in Russian cuisine, Insalata Russa has been embraced and adapted by the Piedmont region of Italy. This creamy salad features a mix of finely chopped vegetables like carrots, peas, and potatoes, often combined with pickles and sometimes tuna, all bound together with a rich mayonnaise dressing.",
    firstCourse : "A specialty of the Piedmont region, Agnolotti del Plin are small, delicate pasta parcels filled with a mixture of meats or vegetables. Traditionally pinched (\"plin\" means pinch in the local dialect) to seal them, these bite-sized delights are usually served in a light broth or with a simple butter and sage sauce, highlighting the rich and tender filling.",
    secondCourse : "A traditional Piedmontese pasta, Tajarin is made with a high ratio of egg yolks, giving it a rich yellow color and a tender texture. These thin, golden strands of pasta are often served with a luxurious sauce, such as butter and sage, truffle, or a slow-cooked meat ragù, making it a true delicacy.",
    dessert : "Delightful, bite-sized almond cookies from Piedmont, featuring a tender, crumbly texture and a rich hazelnut filling sandwiched between two delicate cookies, offering a sweet and nutty finish to any meal."
}
//Summertime Description
const summertimeMenuDescriptions = {
    appetizer : "A traditional Sicilian eggplant dish, Caponata is a sweet and tangy vegetable stew featuring eggplant, tomatoes, celery, and capers, simmered in a rich, slightly sweet and sour sauce made with vinegar and sugar, offering a vibrant and flavorful side or appetizer.",
    firstCourse : "Soft, shell-shaped cavatelli pasta served with a vibrant basil pesto made from fresh basil, garlic, pine nuts, Parmesan cheese, and olive oil, providing a fragrant and flavorful sauce that beautifully complements the pasta.",
    secondCourse : "A classic Roman dish featuring tender chicken pieces simmered in a rich tomato sauce with bell peppers, olives, and a touch of white wine, resulting in a hearty and flavorful meal with a perfect balance of savory and slightly sweet notes.",
    dessert : "A rich and decadent chocolate cake from Capri, made with almond flour and dark chocolate, creating a dense and fudgy texture with a subtly nutty flavor. Often served with a dusting of powdered sugar or a dollop of whipped cream for an indulgent dessert."
}
//Monicas Favorite Description
const monicasFavoriteMenuDescriptions = {
    appetizer : "A traditional flatbread from the Emilia-Romagna region, piadina is made with simple ingredients like flour, lard, and water, then cooked on a griddle. It’s typically served warm and folded around a variety of fillings, such as cured meats, cheeses, and fresh vegetables, offering a delicious and versatile meal or snack.",
    firstCourse : "Traditional stuffed pasta from the Dolomites, these half-moon-shaped ravioli are filled with a sweet-savory mixture of roasted red beets, potatoes, and ricotta, served with a sage butter sauce and a sprinkle of poppy seeds.",
    secondCourse : "A classic Italian dish featuring large pasta tubes filled with a creamy mixture of spinach and ricotta cheese, baked in a rich tomato sauce and topped with a layer of melted mozzarella or béchamel, creating a comforting and flavorful baked pasta dish.",
    dessert : "A rustic Italian tart featuring a buttery, crumbly pastry crust filled with a vibrant, tangy marmalade made from seasonal fruits, offering a delightful balance of sweetness and tartness in every bite."
}

//Roma Menu Description
const romaMenuDescriptions = {
    appetizer : "Crispy, golden-fried rice balls from Rome, filled with a savory mixture of risotto, tomato sauce, and melted mozzarella, creating a deliciously gooey center with every bite.",
    firstCourse : "A beloved Roman pasta dish featuring al dente spaghetti tossed in a robust sauce made from guanciale (cured pork cheek), tomatoes, Pecorino Romano cheese, and a touch of chili for a subtle kick.",
    secondCourse : "A classic Roman entrée of tender veal cutlets, topped with fresh sage leaves and thin slices of prosciutto, cooked in white wine and butter for a melt-in-your-mouth experience that truly \"jumps in the mouth.\"",
    dessert : "Sweet, soft brioche buns from Lazio, generously filled with a luscious whipped cream, making for an indulgent treat perfect for breakfast or dessert."
}
//SeasonalMenu Description
const seasonalMenuDescriptions = {
    appetizer : "A classic Italian appetizer featuring toasted slices of rustic bread topped with a fresh mixture of ripe tomatoes, basil, garlic, and extra virgin olive oil, providing a burst of vibrant, summery flavors.",
    firstCourse : "Creamy risotto made with Arborio rice, infused with delicate saffron threads and studded with tender zucchini pieces, finished with a touch of Parmesan cheese for a rich, aromatic dish.",
    secondCourse : "Juicy chicken breasts marinated in a zesty lemon sauce with garlic, herbs, and a hint of white wine, then roasted to perfection for a bright, tangy, and flavorful main course.",
    dessert : "A light and moist cake featuring the tangy flavor of lemon combined with the creamy richness of ricotta cheese, topped with a powdered sugar and garnished with lemon zest for a refreshing and delightful dessert."
}
//Sicilian  Description
const sicilianMenuDescriptions = {
    appetizer : "Sicilian-style risotto balls, coated in a crispy breadcrumb crust and deep-fried until golden. Filled with a rich mixture of saffron-infused risotto, peas, and meat sauce, they offer a deliciously creamy center with each bite.",
    firstCourse : "A traditional Sicilian pasta, busiate, is served with a vibrant and fresh trapanese pesto made from almonds, tomatoes, basil, garlic, and extra virgin olive oil, creating a flavorful and aromatic sauce.",
    secondCourse : "",
    dessert : "Classic Sicilian pastries featuring crisp, tubular shells filled with a sweet, creamy ricotta cheese filling, often accented with chocolate chips or candied orange peel for an authentic and delightful treat."
}
//Spring Description
const springMenuDescriptions = {
    appetizer : "A flaky, buttery croissant filled with a savory blend of ingredients such as ham, cheese, and herbs, offering a delightful balance of crispy layers and rich, flavorful filling.",
    firstCourse : "Delicate, thin crepes filled with a creamy mixture of ricotta cheese and fresh spinach, then rolled and baked with a light tomato sauce and a sprinkle of Parmesan, creating a comforting and satisfying dish.",
    secondCourse : "",
    dessert : "A beautifully crafted tart with a crisp pastry crust, filled with a luscious vanilla cream and topped with a vibrant assortment of fresh, seasonal fruit, making for a light and refreshing dessert."
}
//Taste of Italy Description
const tasteOfItalyMenuDescriptions = {
    appetizer : "A luxurious Milanese risotto made with Arborio rice, infused with aromatic saffron and cooked in a rich beef broth, finished with a generous grating of Parmigiano-Reggiano for a creamy, golden dish with a delicate flavor.",
    firstCourse : "A classic Italian lasagna layered with tender sheets of pasta, a hearty Bolognese sauce made from slow-cooked beef, tomatoes, and vegetables, and creamy béchamel sauce, all baked to perfection with a topping of melted cheese.",
    secondCourse : "",
    dessert : "A classic Italian dessert, this crostata features a buttery, crumbly pastry crust filled with a smooth, velvety pastry cream. It's beautifully topped with an array of fresh, seasonal fruits, creating a visually stunning and delicious treat. Perfect for any occasion, this dessert offers a delightful balance of rich creaminess and refreshing fruit flavors."
}
//Thats Amore Description
const thatsAmoreMenuDescriptions = {
    appetizer : "A savory Italian pastry, Danubio Salato is a soft, fluffy bread made with a variety of fillings such as ham, cheese, and herbs, shaped into individual rolls and baked together to create a deliciously warm and shareable treat.",
    firstCourse : "Tender, heart-shaped ravioli stuffed with a creamy mixture of ricotta cheese and fresh herbs, served with a delicate butter sauce and a sprinkle of Parmesan, creating a charming and flavorful dish.",
    secondCourse : "A classic Italian comfort dish featuring layers of thinly sliced, breaded, and fried eggplant, interspersed with rich tomato sauce and melted mozzarella and Parmesan cheeses, then baked to perfection for a hearty and satisfying meal.",
    dessert : "A fruity twist on the traditional tiramisu, this version layers coffee-soaked ladyfingers with a creamy mascarpone mixture, fresh strawberries, and a dusting of cocoa powder, offering a light and refreshing dessert with a hint of sweetness."
}

const toscanoMenuDescriptions = {
    appetizer : "A classic Tuscan salad made with chunks of day-old bread, ripe tomatoes, cucumbers, red onions, and fresh basil, all tossed in a simple dressing of olive oil and vinegar. This rustic dish is a refreshing and flavorful way to enjoy the bounty of summer produce.",
    firstCourse : "A traditional flatbread from Tuscany, Schiacciata all’Olio is made with olive oil and topped with a generous sprinkle of sea salt. It's baked until golden and crispy, making it a perfect accompaniment to meals or a delicious snack on its own.",
    secondCourse : "A hearty Tuscan soup made with leftover bread, cannellini beans, and a mix of vegetables like kale, carrots, and celery. Slow-cooked to develop rich flavors, this traditional dish is a comforting and filling option, often enjoyed as a warming meal on a chilly day.",
    dessert : "Traditional almond cookies from Siena, Ricciarelli are made with ground almonds, sugar, and egg whites, resulting in a soft, chewy texture. Lightly dusted with powdered sugar, these delightful treats are often enjoyed during the holidays or as a sweet ending to a meal."
}


//Vegetarian Description
const vegetarianMenuDescriptions = {
    appetizer : "A visually stunning and flavorful bread, braided and infused with vibrant basil pesto, creating a soft, aromatic loaf with a golden crust that’s perfect for dipping or enjoying on its own.",
    firstCourse : "A savory, custard-filled tart featuring tender zucchini, creamy cheese, and a hint of fresh herbs, all encased in a buttery pastry crust, offering a satisfying and flavorful dish suitable for brunch or a light dinner.",
    secondCourse : "Handcrafted garganelli pasta served with a hearty and colorful ratatouille made from a mix of seasonal vegetables like eggplant, bell peppers, zucchini, and tomatoes, simmered to perfection in a savory herb-infused sauce.",
    dessert : "A rich and innovative take on classic tiramisu, featuring layers of coffee-soaked ladyfingers and a creamy mascarpone mixture infused with pistachio paste, topped with crushed pistachios for a nutty and indulgent dessert."
}
//Veneto Description

const venetoMenuDescriptions = {
    appetizer : "A beautifully braided loaf of bread, filled with slices of spicy soppressata and tangy Asiago cheese, baked to a golden perfection. This savory bread offers a delightful combination of flavors and textures, perfect as an appetizer or accompaniment to a meal.",
    firstCourse : "Traditional Venetian bigoli pasta, known for its thick, hearty texture, served with a rich white ragu made from finely ground pork, veal, and aromatic vegetables, simmered in white wine and cream for a comforting and flavorful dish.",
    secondCourse : "",
    dessert : "A classic Italian dessert featuring layers of coffee-soaked ladyfingers and a creamy mascarpone mixture, flavored with cocoa and a touch of rum or Marsala wine. This indulgent treat offers a perfect balance of sweet, creamy, and coffee flavors."
}

//import app from "../../App";

//menuArrays
const fallMenuImages = [pumpkinBread, pumpkinFlan, butternutSquashRavioli, pumpkinAndCinnamonCake];
const forestMenuImages = [gulaschAndPolenta, pappardelleWithPorciniMushrooms, appleStrudel];
const gnocchiMenuImages = [gnocchettiSardiWithArugulaPesto, gnocchiWithBeefRagu, gnocchiAllaRomana, pannaCottaWithBerries];
const ligureMenuImages = [focaccia, minestroneGenovese, filledVegetables, tortaDellaNonna];
const lombardoMenuImages = [sciattValtellinesi, pizzoccheri, casoncelliAllaBergamasa, tortaSbrisolona];
const summertimeMenuImages = [caponata, cavatelliWithBasilPesto, polloAllaRomana, tortaCaprese];
const nonnoMenuImages = [fricoFriulano, tortelliniInBroth, savoryCrumbleWithZucchiniAndSpeck, cantucciBiscotti];
const monicasFavoriteMenuImages = [piadinaRomagnola, casunziei, cannelloni, crostataDiMarmellata];
const piemonteMenuImages = [insalataRussa, agnolottiDelPlin, tajarin, baciDiDama];
const romeMenuImages= [suppliAllaRomana, spaghettiAlAmatriciana, saltimbocca, maritozzi];
const seasonalMenuImages = [bruschettaAlPomodoro, risottoWithZucchiniAndSaffron, lemonChicken, lemonAndRicottaCake];
const sicilianMenuImages = [arancini, busiateWithTrapanese, cannoli];
const springMenuImages = [savoryCroissant, crespelleWithCheeseAndSpinach, fruitAndCreamTart];
const tasteOfItalyMenuImages = [risottoAllaMilanese, lasagneAllaBolognese, crostataCremaFrutta];
const thatsAmoreMenuImages = [danubioSalato, heartShapedFilledPasta, eggplantParmigiana, strawberryTiramisu];
const toscanoMenuImages = [panzanellaSalad, schiacciataAllOlio, ribollita, ricciarelliDiSiena];
const vegetarianMenuImages = [pestoBraidedBread, zucchiniQuiche, garganelli, pistacchioTiramisu];
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
                <Header backgroundImage={backgroundImage} title=""/>
                <LineText text="Courses"/>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={pumpkinBread}
                        title="Fall"
                        id="Fall"
                        imageArray={fallMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Pumpkin Bread"}
                        firstCourse={"Pumpkin Flan"}
                        secondCourse={"Butternut Squash Ravioli"}
                        dessert={"Pumpkin and \nCinnamon Cake"}
                        description={fallMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={appleStrudel}
                        title="Forest"
                        id="Forest"
                        imageArray={forestMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Spezzatino And Polenta"}
                        firstCourse={"Pappardelle With \nPorcini Mushrooms"}
                        dessert={"Apple Strudel"}
                        description={forestMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={gnocchiWithBeefRagu}
                        title="Gnocchi"
                        id="Gnocchi"
                        imageArray={gnocchiMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Gnocchetti Sardi \nWith Arugula Pesto"}
                        firstCourse={"Gnocchi With Beef Ragù"}
                        secondCourse={"Gnocchi Alla Romana"}
                        dessert={"Panna Cotta With Berries"}
                        description={gnocchiMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={piadinaRomagnola}
                        title="Monica's Favorite"
                        id="Monicas Favorite"
                        imageArray={monicasFavoriteMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Piadina Romagnola"}
                        firstCourse={"Casunzei"}
                        secondCourse={"Cannelloni With Spinach & Ricotta"}
                        dessert={"Crostata With Marmalade"}
                        description={monicasFavoriteMenuDescriptions}
                    />
                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={maritozzi}
                        title="Roma"
                        id="Roma"
                        imageArray={romeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Supplì Alla Romana"}
                        firstCourse={"Spaghetti all'Amatriciana"}
                        secondCourse={"Saltimbocca"}
                        dessert={"Maritozzi"}
                        description={romaMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={cannoli}
                        title="Sicilian"
                        id="Sicilian"
                        imageArray={sicilianMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Arancini"}
                        firstCourse={"Busiate With Trapanese Pesto"}
                        dessert={"Cannoli"}
                        description={sicilianMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={fruitAndCreamTart}
                        title="Spring"
                        id="Spring"
                        imageArray={springMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Savory Croissant"}
                        firstCourse={"Crespelle With Cheese \nand Spinach"}
                        dessert={"Fruit and Cream Tart"}
                        description={springMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={lasagneAllaBolognese}
                        title="Taste of Italy"
                        id="Taste of Italy"
                        imageArray={tasteOfItalyMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Risotto Alla Milanese"}
                        firstCourse={"Lasagna Alla Bolognese"}
                        dessert={"Crostata With Crema & Fruits"}
                        description={tasteOfItalyMenuDescriptions}
                    />
                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={heartShapedFilledPasta}
                        title="That's Amore"
                        id="Thats Amore"
                        imageArray={thatsAmoreMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Danubio Salato"}
                        firstCourse={"Heart-Shaped Filled Pasta"}
                        secondCourse={"Eggplant Parmigiana"}
                        dessert={"Strawberry Tiramisù"}
                        description={thatsAmoreMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={pestoBraidedBread}
                        title="Vegetarian"
                        id="Vegetarian"
                        imageArray={vegetarianMenuImages}
                        duration={"2 Hours"}
                        appetizer="Pesto Braided Bread"
                        firstCourse="Zucchini Quiche"
                        secondCourse="Garganelli"
                        dessert="Pistacchio Tiramisù"
                        description={vegetarianMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={tiramisu}
                        title="Veneto"
                        id="Veneto"
                        imageArray={venetoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Braided Bread With \nSorpressa and Asiago"}
                        firstCourse="Bigoli With White Ragù"
                        dessert={"Tiramisù"}
                        description={venetoMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={bruschettaAlPomodoro}
                        title="Seasonal"
                        id="Seasonal"
                        imageArray={seasonalMenuImages}
                        duration="2 Hours"
                        appetizer="Bruschetta al Pomodoro"
                        firstCourse={"Risotto With Zucchini \nand Saffron"}
                        secondCourse="Lemon Chicken"
                        dessert="Lemon and Ricotta Cake"
                        description={seasonalMenuDescriptions}
                    />
                </div>
                <LineText text="New Additions"/>

                <div className="course-cards-container">

                    <CourseCard
                        imageUrl={focaccia}
                        title="Ligure"
                        id="Ligure"
                        imageArray={ligureMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia Genovese"}
                        firstCourse={"Minestrone Genovese"}
                        secondCourse={"Filled Vegetables"}
                        dessert={"Torta della Nonna"}
                        description={ligureMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={casoncelliAllaBergamasa}
                        title="Lombardo"
                        id="Lombardo"
                        imageArray={lombardoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Sciatt Valtellinesi"}
                        firstCourse={"Pizzoccheri"}
                        secondCourse={"Casoncelli alla Bergamasca"}
                        dessert={"Torta Sbrisolona"}
                        description={lombardoMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={tortelliniInBroth}
                        title="Nonno"
                        id="Nonno"
                        imageArray={nonnoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Frico Friulano"}
                        firstCourse={"Tortellini in Broth"}
                        secondCourse={"Savory Crumble with \nZucchini and Speck"}
                        dessert={"Cantucci Biscotti"}
                        description={nonnoMenuDescriptions}
                    />


                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={tajarin}
                        title="Piemontese"
                        id="Piemontese"
                        imageArray={piemonteMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Insalata Russa"}
                        firstCourse={"Agnolotti del Plin"}
                        secondCourse={"Tajarin"}
                        dessert={"Baci di Dama"}
                        description={piemonteMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={caponata}
                        title="Summertime"
                        id="Summertime"
                        imageArray={summertimeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Caponata"}
                        firstCourse={"Cavatelli with Basil Pesto"}
                        secondCourse={"Pollo alla Romana"}
                        dessert={"Torta Caprese"}
                        description={summertimeMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={schiacciataAllOlio}
                        title="Toscano"
                        id="Toscano"
                        imageArray={toscanoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Panzanella Salad"}
                        firstCourse={"Schiacciata all'Olio"}
                        secondCourse={"Ribollita"}
                        dessert={"Ricciarelli di Siena"}
                        description={toscanoMenuDescriptions}
                    />
                </div>
                <LineText text="Cocktails"/>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={aperolSpritz}
                        title="Aperol Spritz"
                        id="Aperol Spritz"
                    />
                    <CourseCard
                        imageUrl={hugo}
                        title="Hugo"
                        id="Hugo"

                    />
                    <CourseCard
                        imageUrl={campariSpritz}
                        title="Campari Spritz"
                        id="Campari Spritz"
                    />
                </div>

            </div>

        );
    } else {
        return (
            <div>
                <Header backgroundImage={backgroundImage} title=""/>
                <LineText text="Courses"/>

                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={pumpkinBread}
                        title="Fall"
                        id="Fall"
                        imageArray={fallMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Pumpkin Bread"}
                        firstCourse={"Pumpkin Flan"}
                        secondCourse={"Butternut Squash Ravioli"}
                        dessert={"Pumpkin and \nCinnamon Cake"}
                        description={fallMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={appleStrudel}
                        title="Forest"
                        id="Forest"
                        imageArray={forestMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Spezzatino And Polenta"}
                        firstCourse={"Pappardelle With \nPorcini Mushrooms"}
                        dessert={"Apple Strudel"}
                        description={forestMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={gnocchiWithBeefRagu}
                        title="Gnocchi"
                        id="Gnocchi"
                        imageArray={gnocchiMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Gnocchetti Sardi \nWith Arugula Pesto"}
                        firstCourse={"Gnocchi With Beef Ragù"}
                        secondCourse={"Gnocchi Alla Romana"}
                        dessert={"Panna Cotta With Berries"}
                        description={gnocchiMenuDescriptions}
                    />

                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={piadinaRomagnola}
                        title="Monica's Favorite"
                        id="Monicas Favorite"
                        imageArray={monicasFavoriteMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Piadina Romagnola"}
                        firstCourse={"Casunzei"}
                        secondCourse={"Cannelloni With Spinach & Ricotta"}
                        dessert={"Crostata With Marmalade"}
                        description={monicasFavoriteMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={maritozzi}
                        title="Roma"
                        id="Roma"
                        imageArray={romeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Supplì Alla Romana"}
                        firstCourse={"Spaghetti all'Amatriciana"}
                        secondCourse={"Saltimbocca"}
                        dessert={"Maritozzi"}
                        description={romaMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={cannoli}
                        title="Sicilian"
                        id="Sicilian"
                        imageArray={sicilianMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Arancini"}
                        firstCourse={"Busiate With Trapanese Pesto"}
                        dessert={"Cannoli"}
                        description={sicilianMenuDescriptions}
                    />


                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={fruitAndCreamTart}
                        title="Spring"
                        id="Spring"
                        imageArray={springMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Savory Croissant"}
                        firstCourse={"Crespelle With Cheese \nand Spinach"}
                        dessert={"Fruit and Cream Tart"}
                        description={springMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={lasagneAllaBolognese}
                        title="Taste of Italy"
                        id="Taste of Italy"
                        imageArray={tasteOfItalyMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Risotto Alla Milanese"}
                        firstCourse={"Lasagna Alla Bolognese"}
                        dessert={"Crostata With Crema & Fruits"}
                        description={tasteOfItalyMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={heartShapedFilledPasta}
                        title="That's Amore"
                        id="Thats Amore"
                        imageArray={thatsAmoreMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Danubio Salato"}
                        firstCourse={"Heart-Shaped Filled Pasta"}
                        secondCourse={"Eggplant Parmigiana"}
                        dessert={"Strawberry Tiramisù"}
                        description={thatsAmoreMenuDescriptions}
                    />
                </div>
                <div className="course-cards-container">

                    <CourseCard
                        imageUrl={pestoBraidedBread}
                        title="Vegetarian"
                        id="Vegetarian"
                        imageArray={vegetarianMenuImages}
                        duration={"2 Hours"}
                        appetizer="Pesto Braided Bread"
                        firstCourse="Zucchini Quiche"
                        secondCourse="Garganelli"
                        dessert="Pistacchio Tiramisù"
                        description={vegetarianMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={tiramisu}
                        title="Veneto"
                        id="Veneto"
                        imageArray={venetoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Braided Bread With \nSorpressa and Asiago"}
                        firstCourse="Bigoli With White Ragù"
                        dessert={"Tiramisù"}
                        description={venetoMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={bruschettaAlPomodoro}
                        title="Seasonal"
                        id="Seasonal"
                        imageArray={seasonalMenuImages}
                        duration="2 Hours"
                        appetizer="Bruschetta al Pomodoro"
                        firstCourse={"Risotto With Zucchini \nand Saffron"}
                        secondCourse="Lemon Chicken"
                        dessert="Lemon and Ricotta Cake"
                        description={seasonalMenuDescriptions}
                    />
                </div>
                <LineText text="New Additions"/>

                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={focaccia}
                        title="Ligure"
                        id="Ligure"
                        imageArray={ligureMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Focaccia Genovese"}
                        firstCourse={"Minestrone Genovese"}
                        secondCourse={"Filled Vegetables"}
                        dessert={"Torta della Nonna"}
                        description={ligureMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={casoncelliAllaBergamasa}
                        title="Lombardo"
                        id="Lombardo"
                        imageArray={lombardoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Sciatt Valtellinesi"}
                        firstCourse={"Pizzoccheri"}
                        secondCourse={"Casoncelli alla Bergamasca"}
                        dessert={"Torta Sbrisolona"}
                        description={lombardoMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={tortelliniInBroth}
                        title="Nonno"
                        id="Nonno"
                        imageArray={nonnoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Frico Friulano"}
                        firstCourse={"Tortellini in Broth"}
                        secondCourse={"Savory Crumble with \nZucchini and Speck"}
                        dessert={"Cantucci Biscotti"}
                        description={nonnoMenuDescriptions}
                    />


                </div>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={tajarin}
                        title="Piemontese"
                        id="Piemontese"
                        imageArray={piemonteMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Insalata Russa"}
                        firstCourse={"Agnolotti del Plin"}
                        secondCourse={"Tajarin"}
                        dessert={"Baci di Dama"}
                        description={piemonteMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={caponata}
                        title="Summertime"
                        id="Summertime"
                        imageArray={summertimeMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Caponata"}
                        firstCourse={"Cavatelli with Basil Pesto"}
                        secondCourse={"Pollo alla Romana"}
                        dessert={"Torta Caprese"}
                        description={summertimeMenuDescriptions}
                    />
                    <CourseCard
                        imageUrl={schiacciataAllOlio}
                        title="Toscano"
                        id="Toscano"
                        imageArray={toscanoMenuImages}
                        duration={"2 Hours"}
                        appetizer={"Panzanella Salad"}
                        firstCourse={"Schiacciata all'Olio"}
                        secondCourse={"Ribollita"}
                        dessert={"Ricciarelli di Siena"}
                        description={toscanoMenuDescriptions}
                    />
                </div>
                <LineText text="Cocktails"/>
                <div className="course-cards-container">
                    <CourseCard
                        imageUrl={aperolSpritz}
                        title="Aperol Spritz"
                        id="Aperol Spritz"
                    />
                    <CourseCard
                        imageUrl={hugo}
                        title="Hugo"
                        id="Hugo"

                    />
                    <CourseCard
                        imageUrl={campariSpritz}
                        title="Campari Spritz"
                        id="Campari Spritz"
                    />
                </div>
            </div>
        );
    }

};

export default Courses;