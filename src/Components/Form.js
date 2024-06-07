import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FormStyle.css';

const Form = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
  
    emailjs
      .sendForm('service_thzoo8o', 'template_gdayuhh', form.current, '6Cx7M-GZZoGi8hoiX')
      .then(
        () => {
          setSuccessMessage('Form submitted successfully!');
          form.current.reset();  // Clear the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('Failed to submit the form. Please try again later.');
        }
      );
  };
  

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name <span className="required">*</span></label>
        <input type="text" name="user_name" required />

        <label>Email <span className="required">*</span></label>
        <input type="email" name="user_email" required />

        <label>Contact no. <span className="required">*</span></label>
        <input type="tel" name="contact_number" required />

        <label>Subject <span className="required">*</span></label>
        <input type="text" name="subject" required />

        <label>Message <span className="required">*</span></label>
        <textarea name="message" rows="6" placeholder="Type your message" required />

        <button type="submit" className="btn">Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Form;
