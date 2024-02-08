import React from 'react'
import {useState} from "react";
import Slider from 'react-slick';
import "./Slider.css"

//icon import
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

//images import
import img1 from '../images/MonicaTeaching.jpg'
import img2  from '../images/MonicaFavicon.png'
import img3 from '../images/MonicaSmiling.jpg'
import img4 from "../images/cropped-MonicaFavicon-3.png"

//Need 4 images, I dont know how to do this for 3? we'll see
const images = [img1, img2, img3, img4];

function SampleNextArrow({onClick}) {
    return (
        <div className = 'arrow arrow-right' onClick={onClick}>
            <BsArrowRight/>
        </div>
    );
}

function SamplePrevArrow({onClick}) {

    return (
        <div className = 'arrow arrow-left' onClick={onClick}>
            <BsArrowLeft/>
        </div>
    );
}

function EmptyArrow({onClick}) {
    return (
        <div></div>
    );
}

//Wont let me use the name slider because its imported that way
const Carousel = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const  settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: "0px", justifyContent: "center" }}> {dots} </ul>
            </div>
        ),
        customPaging: (current, next) => (
            <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: <EmptyArrow />,
                    prevArrow: <EmptyArrow />,
                }
            }]
    };

    return (
        <div className="container">
            <h2 className="header">Class Name</h2>
                <div className="slider">
                    <Slider {...settings}>
                        {
                            images.map((img, index)=> (
                                <div className={index === slideIndex ? 'slide slide-active' : "slide"} key={index}>
                                    <img src={img} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
        </div>
    );
};

export default Carousel;