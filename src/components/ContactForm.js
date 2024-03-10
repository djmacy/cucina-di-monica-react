import React, { useState, useRef } from 'react';
import "./ContactForm.css"
import emailjs from '@emailjs/browser';
import Select from 'react-select';

const serviceId = 'service_x3wcoak';
const urlRegex = /(?:https?|ftp):\/\/[^\s/$.?#].\s*/gi;
const seoRegex = /SEO/i;
const ContactForm = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        course: '',
        time: '',
        day: ''
    });

    const cookingClasses = [
        {label: "option1", value: 1},
        {label: "option2", value: 2},
        {label: "option3", value: 3}
    ]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function clearForm(message) {
        alert(message);
        form.current.reset();
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            course: '',
            time: '',
            day: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();


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

        //console.log('Form data submitted:', formData);
    };

    return (
        <div className="contact-container">
            <form className="contact-left" ref={form} onSubmit={handleSubmit}>
                <div className="contact-title">
                    <h2>Get in touch</h2>
                    <hr/>
                </div>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" className="contact-inputs" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Your Phone" className="contact-inputs" value={formData.phone} onChange={handleChange} />
                <select name="time" placeholder="Select a time" className="contact-inputs" value={formData.time} onChange={handleChange}>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                </select>
                <select name="day" placeholder="Select a day" className="contact-inputs" value={formData.day} onChange={handleChange}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <select name="course" placeholder="Select a course" className="contact-inputs" value={formData.course} onChange={handleChange}>
                    <option value="Fall Menu">Fall Menu</option>
                    <option value="Forest Menu">Forest Menu</option>
                    <option value="Gnocchi Menu">Gnocchi Menu</option>
                    <option value="Roma Menu">Roma Menu</option>
                    <option value="Seasonal Menu">Seasonal Menu</option>
                    <option value="Sicilian Menu">Sicilian Menu</option>
                    <option value="Spring Menu">Spring Menu</option>
                    <option value="Taste of Italy Menu">Taste of Italy Menu</option>
                    <option value="That's Amore Menu">That's Amore Menu</option>
                    <option value="Vegetarian Menu">Vegetarian Menu</option>
                    <option value="Veneto Menu">Veneto Menu</option>
                </select>
                <Select defaultValue="" isMulti name="colors " options={cookingClasses} className="contact-inputs" classNamePrefix="select"/>

                <textarea name="message" placeholder="Your Message" className="contact-inputs" value={formData.message} onChange={handleChange} required />
                <button type="submit">Submit {/*<img src="" alt="" />*/}</button>
            </form>
            <div className="contact-right">
                {/*<img src="/assets/right_img.png" alt="" */}

            </div>
        </div>
    );

};

export default ContactForm;
