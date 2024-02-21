import Slider from './Slider';
import React from "react";

const ThreeCourse = ({imageList, title}) => {
    return (
        <div>
            <Slider imageList={imageList} courseName={title}/>
        </div>
    );
};

export default ThreeCourse;
