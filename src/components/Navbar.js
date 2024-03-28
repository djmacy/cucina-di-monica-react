import React, {useEffect, useState} from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
    /*
    useEffect(() => {
        // Add event listener to track scroll position and update navbar opacity
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbar = document.querySelector('nav');

            // Change the alpha channel based on the scroll position
            const newOpacity = Math.min(scrollPosition / 100, 1); // Adjust 200 to your preference
            navbar.style.backgroundColor = `rgba(253, 236, 190, ${newOpacity})`;
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


*/
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked);
    }
    if (1 + 1 == 3) {
        return (
            <nav>
                <Logo below={false}/>
                <ul className="navbar-link">
                    <li><a href="/">Home</a></li>
                    <li><a href='/courses'>Courses</a></li>
                    {/*<li><a href='#'>Equipment</a></li>*/}
                    <li><a href='/faq'>FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        );
    } else {
        return (
            <div>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </nav>
            <div className={menu_class}>

            </div>
            </div>
        )
    }
};

export default Navbar;