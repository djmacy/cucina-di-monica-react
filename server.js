const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Use the port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Use nodemailer to send an email (replace with your email service configuration)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'laCucinaDiMonicaBurner@gmail.com', // Replace with your email
            pass: '7$b!oD31raCasToyLh==', // Replace with your email password
        },
    });

    const mailOptions = {
        from: 'laCucinaDiMonicaBurner@gmail.com',
        to: 'djmacy2001@gmail.com', // Replace with the recipient's email
        subject: 'New Form Submission',
        text: `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});