import React from 'react';
import backgroundImage from "../../images/MonicaTeaching.jpg";
import Header from "../Header";
import Slider from "../Slider"
import CourseCard from "../CourseCard";
//import images for rome menu
import img1 from "../../images/MonicaTeaching.jpg"
import img2 from "../../images/MonicaFavicon.png"
import img3 from "../../images/MonicaSmiling.jpg"
import img4 from "../../images/cropped-MonicaFavicon-3.png"



const romeMenuImages= [img1, img2, img3]
const Classes = () => {
    return (
        <div>
            <Header backgroundImage={backgroundImage} title="Courses"/>
            <CourseCard imageUrl={img1} title="Rome Menu" id="Rome Card"/>
            <CourseCard imageUrl={img2} title="Another Menu" id="Another Menu"/>
            <Slider imageList={romeMenuImages} courseName="Rome Menu" />
        </div>
    );
};

export default Classes;