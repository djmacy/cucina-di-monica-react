// CourseCard.js
import React, { useState } from 'react';
import ThreeCourse from './ThreeCourse'; // Import your ThreeCourse component
import Modal from './Modal'; // Import the Modal component
import './CourseCard.css'; // Create a CSS file for styling

const CourseCard = ({ title, imageUrl, id, imageArray}) => {
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
                <ThreeCourse imageList={imageArray} title={title}/>
            </Modal>

        </div>
    );
};

export default CourseCard;