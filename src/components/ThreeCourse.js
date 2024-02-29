import Slider from './Slider';
import React from "react";
import './ThreeCourse.css';

const ThreeCourse = ({imageList, title, duration, appetizer, firstCourse, secondCourse, dessert}) => {
    return (
        <div className="three-course-container">
            <Slider imageList={imageList} courseName={title}/>
            {/*<p className="three-course-duration">{`Duration: ${duration}` }</p>*/}
            <div className="three-course-content-container">
                <div className="content-item">
                    <img src={imageList[0]} alt="Appetizer Image" className="content-image"/>
                    <p className="three-course-content">{appetizer} </p>
                </div>
                <div className="content-item">
                    <img src={imageList[1]} alt="First Course Image" className="content-image"/>
                    <p className="three-course-content">{firstCourse}</p>
                </div>
                {/*Only show if this is a four course */}
                {imageList.length === 4 && (
                    <div className="content-item">
                        <img src={imageList[2]} alt="Second Course Image" className="content-image"/>
                        <p className="three-course-content">{secondCourse} </p>
                    </div>
                )}
                <div className="content-item">
                    <img src={imageList.length === 4 ? imageList[3] : imageList[2]} alt="Dessert Image" className="content-image"/>
                    <p className="three-course-content">{dessert} </p>
                </div>
            </div>
        </div>
    );
};

export default ThreeCourse;
