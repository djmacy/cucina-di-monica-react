// CourseCard.js
import React, { useState } from 'react';
import ThreeCourse from './ThreeCourse'; // Import your ThreeCourse component
import Modal from './Modal'; // Import the Modal component
import './CourseCard.css'; // Create a CSS file for styling

//import images
import img1 from '../images/cropped-MonicaFavicon-3.png'
import img2 from '../images/MonicaTeaching.jpg'
import img3 from '../images/cropped-MonicaFavicon-3.png'

const romeMenuList = [img1, img2, img3]

const CourseCard = ({ title, imageUrl, id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id={id} className="course-card" onClick={openModal}>
            <img src={imageUrl} alt={title} className="course-image" />
            <h3 className="course-title">{title}</h3>
            <Modal id={id} isOpen={isModalOpen} onClose={closeModal}>
                <h2>{title}</h2>
                <p>Text Here</p>
                {/*<ThreeCourse imageList={romeMenuList} />
                */}
            </Modal>

        </div>
    );
};

export default CourseCard;