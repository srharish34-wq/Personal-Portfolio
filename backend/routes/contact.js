const express = require('express');
const router = express.Router();
const { sendEmail } = require('../config/nodemailer');

// Contact form submission
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, service, budget, timeline, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Email to yourself (Harish)
    const mailToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
            <hr style="border: 1px solid #e5e7eb;"/>
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            
            <hr style="border: 1px solid #e5e7eb;"/>
            
            <h3 style="color: #8b5cf6;">Message:</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">${message}</p>
            
            <hr style="border: 1px solid #e5e7eb;"/>
            
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `
    };

    // Confirmation email to the user
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Harish SR',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #8b5cf6;">Thank You for Reaching Out!</h2>
            <hr style="border: 1px solid #e5e7eb;"/>
            
            <p>Hi ${name},</p>
            
            <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
            
            <h3 style="color: #8b5cf6;">Your Message:</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">${message}</p>
            
            <hr style="border: 1px solid #e5e7eb;"/>
            
            <p>Best regards,<br/>
            <strong>Harish SR</strong><br/>
            Full Stack Developer & AI Engineer<br/>
            📧 srharish34@gmail.com<br/>
            📱 +91 6369254389</p>
            
            <hr style="border: 1px solid #e5e7eb;"/>
            
            <p style="color: #6b7280; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await sendEmail(mailToSelf);
    await sendEmail(mailToUser);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.'
    });

  } catch (error) {
    console.error('Error in contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message
    });
  }
});

// Book a call endpoint
router.post('/book-call', async (req, res) => {
  try {
    const { name, email, phone, date, time, topic } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Call Booking: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #8b5cf6;">New Call Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${time}</p>
          <p><strong>Topic:</strong> ${topic}</p>
        </div>
      `
    };

    await sendEmail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Call booking request sent successfully!'
    });

  } catch (error) {
    console.error('Error booking call:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to book call. Please try again.',
      error: error.message
    });
  }
});

module.exports = router;