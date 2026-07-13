import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://portfolio-backend-ckpq.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert(data.error || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
};

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Get in Touch</h3>
            <p>Email: chanduvattikulla71@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/chandu-vattikulla</p>
            <p>GitHub: github.com/ChanduVattikulla</p>
            <p>Location:📍 Hyderabad, India</p>

            <div className="social-links"> 
              <a href="https://www.linkedin.com/in/chandu-vattikulla/" className="social-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/ChanduVattikulla" className="social-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://leetcode.com/u/ChanduVattikulla/" className="social-btn" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <motion.button 
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;