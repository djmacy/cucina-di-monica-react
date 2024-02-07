import React from 'react'
import {useState} from "react";
import Slider from 'react-slick';
import "./Slider.css"
import img1 from '../images/MonicaTeaching.jpg'
import img2  from '../images/MonicaFavicon.png'
import img3 from '../images/MonicaSmiling.jpg'

const images = [img1, img2, img3];

const Carousel = () => {

    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
        <div className="container">
            <h2 className="header">Class Name</h2>
                <div className="slider">
                    <Slider {...settings}>
                        {
                            images.map((img)=> (
                                <div className="slide" key={img}>
                                    <img src={img} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
        </div>
    );
};

export default Slider;