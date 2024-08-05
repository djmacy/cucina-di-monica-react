import React, { useState, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import logo from '../images/Tiramisu.jpeg';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const urlRegex = /(?:https?|ftp):\/\/[^\s/$.?#].\s*/gi;
const seoRegex = /\bSEO\b/i;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const travelCost = 30;
let priceCalc = 0;

const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        time: '',
        day: '',
        course: '',
        people: '',
        cocktails: 'No'
    });

    const cookingClasses = [
        { label: 'Fall', value: 'Fall Menu' },
        { label: 'Forest', value: 'Forest Menu' },
        { label: 'Gnocchi', value: 'Gnocchi Menu' },
        { label: 'Ligure', value: 'Ligure Menu' },
        {label: 'Lombardo', value: 'Lombardo Menu'},
        { label: "Monica's Favorite", value: "Monica's Favorite Menu" },
        { label: 'Nonno', value: 'Nonno Menu' },
        {label: "Piemontese", value: 'Piemontese Menu'},
        { label: 'Roma', value: 'Roma Menu' },
        { label: 'Seasonal', value: 'Seasonal Menu'},
        { label: 'Sicilian', value: 'Sicilian Menu'},
        { label: 'Spring', value: 'Spring Menu'},
        { label: 'Summertime', value: 'Summertime Menu'},
        { label: 'Taste of Italy', value: 'Taste of Italy Menu' },
        {label: "Toscano", value: "Toscano Menu"},
        { label: "That's Amore", value: "That's Amore Menu" },
        { label: 'Vegetarian', value: 'Vegetarian Menu' },
        { label: 'Veneto', value: 'Veneto Menu' },

    ];

    const days = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' },
    ];

    const times = [
        { label: 'Morning', value: 'Morning' },
        { label: 'Evening', value: 'Evening' },
    ];

    const people = [
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3' },
        { label: 'Four', value: '4' },
        { label: 'Five', value: '5' },
        { label: 'Six', value: '6' },
    ];

    const priceChart = {
        '2': 200,
        '3': 240,
        '4': 300,
        '5': 350,
        '6': 360,
    };

    const coursesChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];

        setFormData((prevData) => ({
            ...prevData,
            course: selectedValues.join(', '),
        }));
    };

    const daysChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];

        setFormData((prevData) => ({
            ...prevData,
            day: selectedValues.join(', '),
        }));
    };

    const timesChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];

        setFormData((prevData) => ({
            ...prevData,
            time: selectedValues.join(', '),
        }));
    };

    const peopleChange = (selectedOption) => {
        if (!selectedOption) {
            priceCalc = 0;
            setFormData((prevData) => ({
                ...prevData,
                people: '',
            }));
            return;
        }

        const { value } = selectedOption;
        priceCalc = priceChart[value];
        if (formData.cocktails === "Yes") {
            priceCalc += 50
        }
        setFormData((prevData) => ({
            ...prevData,
            people: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        // Update form data for checkbox
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked ? 'Yes' : 'No',
        }));
        //No because form data is always late by one step. Not sure why its just weird
        if (formData.cocktails === "No") {
            priceCalc += 50;
        } else {
            priceCalc -= 50
        }

        //console.log(formData.cocktails)
        //console.log(form.current);
    };

    function clearForm(message) {
        alert(message);
        form.current.reset();
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            time: '',
            day: '',
            course: '',
            people: '',
            cocktails: 'No', // Reset cocktails state to initial value
        });
        priceCalc = 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate phone number separately
        if (name === 'phone') {
            if (!value.match(phoneRegex)) {
                e.target.setCustomValidity('Insert in 123-456-7890 format');
            } else {
                e.target.setCustomValidity('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.message && urlRegex.test(formData.message)) {
            clearForm('Please refrain from inputting URL links.');
            return;
        }
        if (formData.message && seoRegex.test(formData.message)) {
            clearForm('Please refrain from using the words SEO.');
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    clearForm('SUCCESS! Monica will get back to you as soon as possible');
                },
                (error) => {
                    clearForm('FAILED...', error.text);
                },
            );
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="contact-container">
            <form className="contact-left" ref={form} onSubmit={handleSubmit}>
                <div className="contact-title">
                    <h2>Get in touch</h2>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="contact-inputs"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="contact-inputs"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone"
                    className="contact-inputs"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <Select
                    isMulti
                    menuPlacement="auto"
                    menuPosition="fixed"
                    name="day"
                    placeholder="Select Days"
                    options={days}
                    className="contact-select"
                    classNamePrefix="select"
                    value={days.filter((option) => formData.day.includes(option.value))}
                    onChange={daysChange}
                />
                <Select
                    isMulti
                    name="time"
                    placeholder="Select Times"
                    options={times}
                    className="contact-select"
                    classNamePrefix="select"
                    value={times.filter((option) => formData.time.includes(option.value))}
                    onChange={timesChange}
                />
                <Select
                    isMulti
                    name="course"
                    placeholder="Select Courses"
                    options={cookingClasses}
                    className="contact-select"
                    classNamePrefix="select"
                    value={cookingClasses.filter((option) => formData.course.includes(option.value))}
                    onChange={coursesChange}
                />
                <Select
                    name="people"
                    isClearable={true}
                    placeholder="Select Number of People"
                    options={people}
                    className="contact-select"
                    classNamePrefix="select"
                    value={people.filter((option) => formData.people.includes(option.value))}
                    onChange={peopleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="contact-inputs"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <label className="cocktails">
                    <input
                        type="checkbox"
                        id="cocktails"
                        name="cocktails"
                        checked={formData.cocktails === 'Yes'}
                        onChange={handleCheckboxChange}
                    />
                    Include cocktails?
                </label>

                <p>{priceCalc !== 0 ? `Estimated Price: $${priceCalc} + $${travelCost} travel cost` : null}</p>
                <button type="submit">Submit</button>
            </form>
            <div className="contact-right">
                <p>2 People: $200 ($100/person)</p>
                <p>3 People: $240 ($80/person)</p>
                <p>4 People: $300 ($75/person)</p>
                <p>5 People: $350 ($70/person)</p>
                <p>6 People: $360 ($60/person)</p>
                <p className="travel">*$30 additional charge for travel costs*</p>
                <p className="travel">*$50 additional charge for cocktails*</p>
            </div>
        </div>
    );
};

export default ContactForm;