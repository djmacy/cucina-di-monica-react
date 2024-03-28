import React, { useState, useRef } from 'react';
import "./ContactForm.css"
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import logo from '../images/Tiramisu.jpeg'
import Logo from '../components/Logo';

const serviceId = 'service_x3wcoak';
const urlRegex = /(?:https?|ftp):\/\/[^\s/$.?#].\s*/gi;
const seoRegex = /SEO/i;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        time: '',
        day: '',
        course: ''
    });

    const cookingClasses = [
        {label: "Fall Menu", value: "Fall Menu"},
        {label: "Gnocchi Menu", value: "Gnocchi Menu"},
        {label: "Roma Menu", value: "Roma Menu"},
        {label: "Seasonal Menu", value: "Seasonal Menu"},
        {label: "Sicilian Menu", value: "Sicilian Menu"},
        {label: "Spring Menu", value: "Spring Menu"},
        {label: "Taste of Italy Menu", value: "Taste of Italy Menu"},
        {label: "That's Amore Menu", value: "That's Amore Menu"},
        {label: "Vegetarian Menu", value: "Vegetarian Menu"},
        {label: "Veneto Menu", value: "Veneto Menu"}
    ]

    const days = [
        {label: "Monday", value: "Monday"},
        {label: "Tuesday", value: "Tuesday"},
        {label: "Wednesday", value: "Wednesday"},
        {label: "Thursday", value: "Thursday"},
        {label: "Friday", value: "Friday"},
        {label: "Saturday", value: "Saturday"},
        {label: "Sunday", value: "Sunday"}
    ]

    const times = [
        {label: "Morning", value: "Morning"},
        {label: "Evening", value: "Evening"}
    ]

    const coursesChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];

        setFormData((prevData) => ({
            ...prevData,
            course: selectedValues.join(', '),
            //day: selectedValues.join(', '),
           // time: selectedValues.join(', ')
        }));
       // console.log(formData.course);
       // console.log(formData.time);
       // console.log(formData.day);
    };

    const daysChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];

        setFormData((prevData) => ({
            ...prevData,

            day: selectedValues.join(', '),
            // time: selectedValues.join(', ')
        }));
        //console.log(formData.day);
    };

    const timesChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];

        setFormData((prevData) => ({
            ...prevData,
            time: selectedValues.join(', ')
        }));
       // console.log(formData.time);
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
            course: ''
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const input = e.target;
        // Update form data
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate phone number separately
        if (name === "phone") {
            if (!value.match(phoneRegex)) {
                input.setCustomValidity("Insert in 123-456-7890 format")
            } else {
                input.setCustomValidity("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData.phone + " success");

        if (formData.message && urlRegex.test(formData.message)) {
            // Display an alert or handle the case where a URL is found in the message
            clearForm('Not interested... Sell that elsewhere.');
            return; // exit the function
        }
        if (formData.message && seoRegex.test(formData.message)) {
            // Display an alert or handle the case where "SEO" is found in the message
            clearForm('Nice try. My Validation is superior to your bot :)');
            return; // exit the function
        }

        emailjs
            .sendForm(serviceId, 'template_tgdohai', form.current, {
                publicKey: 'ltJZY1kdODXr96tLF',
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
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" className="contact-inputs" value={formData.email} onChange={handleChange} required />
                <input type="tel" id="phone" name="phone" placeholder="Your Phone" className="contact-inputs" value={formData.phone} onChange={handleChange} />

                <Select
                    isMulti
                    menuPlacement="auto"
                    menuPosition="fixed"
                    name="day"
                    placeholder="Select Days"
                    options={days}
                    className="contact-select"
                    classNamePrefix="select"
                    value={days.filter(option => formData.day.includes(option.value))}
                    onChange={daysChange}
                />
                <Select
                    isMulti
                    name="time"
                    placeholder="Select Times"
                    options={times}
                    className="contact-select"
                    classNamePrefix="select"
                    value={times.filter(option => formData.time.includes(option.value))}
                    onChange={timesChange}
                />
                <Select
                    isMulti
                    name="course"
                    placeholder="Select Courses"
                    options={cookingClasses}
                    className="contact-select"
                    classNamePrefix="select"
                    value={cookingClasses.filter(option => formData.course.includes(option.value))}
                    onChange={coursesChange}
                />

                <textarea name="message" placeholder="Your Message" className="contact-inputs" value={formData.message} onChange={handleChange} required />
                <button type="submit">Submit {/*<img src="" alt="" />*/}</button>
            </form>
            <div className="contact-right">
                {/* <Logo below={true}/>*/}
                <img src={logo} alt="logo" />
            </div>
        </div>
    );

};

export default ContactForm;
