import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css'; // Ensure CSS is correctly linked

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k3alc0r', 'template_3vfvarb', e.target, '_ZHB2NTrn4zdpu0Zz')
      .then((result) => {
        alert('Message Sent, We will get back to you shortly', result.text);
      }, (error) => {
        alert('An error occurred, Please try again', error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kalpkumarshah" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://github.com/kshah223" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
