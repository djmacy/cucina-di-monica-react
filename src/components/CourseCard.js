import React, { useEffect, useState, useRef } from 'react';
import ThreeCourse from './ThreeCourse';
import Modal from './Modal';
import './CourseCard.css';

const CourseCard = ({ title, imageUrl, id, imageArray, duration, appetizer, firstCourse, secondCourse, dessert}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shouldGrow, setShouldGrow] = useState(true);
    const [isClicked, setIsClicked] = useState(false);
    const cardRef = useRef();

    const openModal = () => {
        setIsModalOpen(true);
        setShouldGrow(false); // Disable grow effect on click
        setIsClicked(true); // Mark card as clicked
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setShouldGrow(true); // Enable grow effect when modal is closed
        setIsClicked(false); // Mark card as not clicked
    };

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setShouldGrow(entry.isIntersecting && !isClicked); // Grow only if not clicked
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [isClicked]);

    return (
        <div
            id={id}
            ref={cardRef}
            className={`course-card ${shouldGrow ? 'grow' : ''} ${isModalOpen ? 'clicked' : ''}`}
            onClick={openModal}
        >
            <img src={imageUrl} alt={title} className="course-image" />
            <h3 className="course-card-title">{title}</h3>
            <Modal id={id} isOpen={isModalOpen} onClose={closeModal}>
                <ThreeCourse imageList={imageArray} title={title} duration={duration} appetizer={appetizer} firstCourse={firstCourse} secondCourse={secondCourse} dessert={dessert} />
            </Modal>
        </div>
    );
};

export default CourseCard;
