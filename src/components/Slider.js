import React from 'react'
import {useState} from "react";
import Slider from 'react-slick';
import "./Slider.css"

//icon import
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

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
//parameters a list of images and string for the name of the cooking class
const Carousel = ({imageList, courseName}) => {
    //Need 4 images, I dont know how to do this for 3? we'll see
    const images = imageList;
    const totalImages = images.length;
    const [slideIndex, setSlideIndex] = useState(totalImages === 3 ? 1 : 0);

    const  settings = {
        dots: true,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        beforeChange: (current, next) => {
            //console.log('Current slide index:', current);
            //console.log('Next slide index:', current);
            //console.log('SlideIndex', slideIndex);
            // Adjust the slide index to account for center mode
            if (totalImages === 3) {
                const adjustedNext = (next % totalImages + totalImages) % totalImages;
                setSlideIndex(adjustedNext === totalImages - 1 ? 0 : adjustedNext + 1);
            } else {
                setSlideIndex(next);
            }
        },
        centerMode: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: "0px", justifyContent: "center" }}> {dots} </ul>
            </div>
        ),
        customPaging: (current, next) => {
            // For 4 images, use standard behavior
            if (totalImages === 4) {
                return (
                    <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
                    </div>
                );
            }

            // For 3 images, apply the adjustment
            return (
                <div className={current === slideIndex - 1 || (current === 2 && slideIndex === 0) ? 'dot dot-active' : 'dot'}>
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: <EmptyArrow />,
                    prevArrow: <EmptyArrow />,
                    beforeChange: (current, next)=>setSlideIndex(next),//add logic here
                    customPaging: (current, next) => (
                        <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
                        </div>
                    )
                }
            }]
    };

    return (
        <div className="container">
            <h2 className="header">{courseName}</h2>
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