import React, { useState, useRef } from 'react';
import "./ContactForm.css"
import emailjs from '@emailjs/browser';

const serviceId = 'service_x3wcoak';
const ContactForm = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //logic here
        emailjs
            .sendForm(serviceId, 'template_tgdohai', form.current, {
                publicKey: 'ltJZY1kdODXr96tLF',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        console.log('Form data submitted:', formData);
    };

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <br />
            <label>
                Select Cooking Class:
                <select name="course" value={formData.course} onChange={handleChange}>
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
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
