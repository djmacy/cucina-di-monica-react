import React, { useRef, useState } from 'react';
import "./Accordion.css";

const data = [
    {
        question: 'Where are the classes conducted?',
        answer: 'In the comfort of your own home. I will come to you with all the supplies needed. If you have a venue for a small event please contact me.' ,
    },
    {
        question: 'What are your prices for cooking classes?',
        answer: '2 People: $200 ($100/person), 3 People: $240 ($80/person, 4 People: $300 ($75/person) 5 People: $350 ($70/person), 6 People: $360 ($60/person). There is a $30 additional charge for travel costs. You may also choose to have cocktails for an additional $50. Visit the <a href="https://cucinadimonica.com/courses">courses</a> page to see what drinks are offered.' ,
    },
    {
        question: 'Do you offer small caterings?',
        answer: 'Absolutely, I do cater small events sizing from 10-20 people. Please contact me directly for more information.',
    },
    {
        question: 'Do you offer classes for children?',
        answer: 'Of course, accommodations can always be made for a kid’s class. Contact me for more information.',
    },
    {
        question: 'Do you offer gluten free classes?',
        answer: 'Definitely, we can work together to ensure we create wonderful gluten-free dishes. Contact me for more information.',
    },
    {
        question: 'Can we change the dishes in a class?',
        answer: 'I always strive to accommodate your desires, but 72-hour notice prior to the class date is required.',
    },
    {
        question: 'Can we hire you as a personal chef?',
        answer: 'Certainly, I do dinner parties, romantic evenings, or any other special occasions. Contact me for more information.',
    },
    {
        question: 'What is your refund policy?',
        answer: 'I do not do refunds. You can reschedule for a different date as long as it is prior to 72 hours before the class. All cancellations with less then 72 hours notice forfeit cost of the class.',
    }
];

// Accordion item component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
        <div className="wrapper">
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <p className='question-content'>{question}</p>
            </button>

            <div ref={contentHeight} className="answer-container" style={
                isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className="answer-content" dangerouslySetInnerHTML={{ __html: answer }}></p>
            </div>
        </div>
    )
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='accordion-container'>
            <h2>FAQ</h2>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
};

export default Accordion;
