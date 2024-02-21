import React from 'react';
import backgroundImage from "../../images/MonicaTeaching.jpg";
import Header from "../Header";
import Slider from "../Slider"
import CourseCard from "../CourseCard";
import './Courses.css';

//import images for rome menu
import img1 from "../../images/MonicaTeaching.jpg"
import img2 from "../../images/MonicaFavicon.png"
import img3 from "../../images/MonicaSmiling.jpg"

const romeMenuImages= [img1, img2, img3]
const Courses = () => {
    return (
        <div>
            <Header backgroundImage={backgroundImage} title="Courses"/>
            <div className="course-cards-container">
                <CourseCard imageUrl={img1} title="Rome Menu" id="Rome Card" imageArray={romeMenuImages}/>
                <CourseCard imageUrl={img2} title="Another Menu" id="Another Menu" imageArray={romeMenuImages}/>
                <CourseCard imageUrl={img3} title="Third Menu" id="Third Menu" imageArray={romeMenuImages}/>
            </div>
            <Slider imageList={romeMenuImages} courseName="Rome Menu" />
        </div>
    );
};

export default Courses;