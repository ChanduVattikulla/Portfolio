import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'devicon/devicon.min.css';
import '../styles/Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: null, text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickTopicSelect = (topicText) => {
    setFormData((prev) => ({
      ...prev,
      message: `Hi Chandu, I'm reaching out regarding ${topicText}. `
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chanduvattikulla71@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, text: '' });

    try {
      const response = await fetch('https://portfolio-backend-ckpq.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setFormStatus({ type: null, text: '' });
        }, 5000);
      } else {
        setFormStatus({ type: 'error', text: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ type: 'error', text: 'Network connection error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMetrics = [
    {
      label: 'Direct Email',
      value: 'chanduvattikulla71@gmail.com',
      action: handleCopyEmail,
      isCopy: true,
      icon: (
        <svg viewBox="0 0 24 24" className="meta-svg">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      label: 'Location',
      value: 'Hyderabad, India',
      action: null,
      isCopy: false,
      icon: (
        <svg viewBox="0 0 24 24" className="meta-svg">
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    }
  ];

  const quickTopics = [
    'Workflow Automation',
    'AI Integration',
    'Full-Stack Web Dev',
    'Collaboration'
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/chandu-vattikulla/', 
      icon: <i className="devicon-linkedin-plain"></i> 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/ChanduVattikulla', 
      icon: <i className="devicon-github-original"></i> 
    },
    { 
      name: 'LeetCode', 
      href: 'https://leetcode.com/u/ChanduVattikulla/', 
      icon: (
        <svg className="custom-social-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.515 1.879 0 .514-.515.514-1.365 0-1.879l-2.697-2.607c-1.033-1.033-2.405-1.52-3.868-1.52s-2.835.487-3.868 1.52l-4.319 4.381c-1.033 1.033-1.52 2.405-1.52 3.868s.487 2.835 1.52 3.868l4.332 4.363c1.033 1.033 2.405 1.52 3.868 1.52s2.835-.487 3.868-1.52l2.697-2.607c.514-.515.514-1.365 0-1.879s-1.365-.515-1.879 0zM20.811 13.01H10.666c-.726 0-1.314.588-1.314 1.314s.588 1.314 1.314 1.314h10.145c.726 0 1.314-.588 1.314-1.314s-.588-1.314-1.314-1.314z"/>
        </svg>
      ) 
    }
  ];

  return (
    <section id="contact" className={`premium-contact-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="premium-contact-container">
        
        {/* HEADER BLOCK */}
        <div className="contact-headline-block">
          <div className="headline-badge-row">
            <span className="contact-subtitle">Get In Touch</span>
            <span className="availability-pill">
              <span className="pulse-beacon"></span>
              Available for Opportunities
            </span>
          </div>
          <motion.h2 
            className="contact-main-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's connect.
          </motion.h2>
        </div>

        <div className="contact-grid-layout">
          
          {/* LEFT COLUMN: CARDS */}
          <motion.div 
            className="contact-meta-rail"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="meta-intro">
              <h3>Have a question or want to work together?</h3>
              <p>Feel free to reach out for project inquiries, technical collaborations, or just to say hello.</p>
            </div>

            <div className="interactive-metric-cards">
              {contactMetrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className={`metric-glass-card ${metric.isCopy ? 'clickable-card' : ''}`}
                  onClick={metric.action || undefined}
                >
                  <div className="metric-icon-wrapper">{metric.icon}</div>
                  <div className="metric-details">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}</span>
                  </div>
                  {metric.isCopy && (
                    <div className="copy-action-indicator">
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div 
                            key="copied-state"
                            className="copy-state-pill"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg viewBox="0 0 24 24" className="copy-svg copied-check-icon">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Copied!</span>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="default-copy-state"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg viewBox="0 0 24 24" className="copy-svg">
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="social-pill-deck">
              <span className="deck-label">Profiles:</span>
              <div className="pill-row">
                {socialLinks.map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.href} 
                    className={`premium-social-pill ${social.name.toLowerCase()}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {social.icon}
                    <span className="social-pill-text">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div 
            className="contact-form-rail"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="premium-glass-form" onSubmit={handleSubmit}>
              
              <div className="quick-topics-block">
                <span className="quick-topics-label">Quick topics:</span>
                <div className="topic-chips-row">
                  {quickTopics.map((topic, tIdx) => (
                    <button
                      key={tIdx}
                      type="button"
                      className="quick-topic-chip"
                      onClick={() => handleQuickTopicSelect(topic)}
                    >
                      + {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="input-field-group">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  required
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <label htmlFor="form-name">Your Name</label>
                <div className="input-focus-border"></div>
              </div>

              <div className="input-field-group">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  required
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <label htmlFor="form-email">Your Email</label>
                <div className="input-focus-border"></div>
              </div>

              <div className="input-field-group">
                <textarea
                  name="message"
                  id="form-message"
                  required
                  rows="4"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <label htmlFor="form-message">Your Message</label>
                <div className="input-focus-border"></div>
              </div>

              <AnimatePresence mode="wait">
                {formStatus.type && (
                  <motion.div 
                    className={`form-status-banner ${formStatus.type}`}
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="banner-content-wrapper">
                      {formStatus.type === 'success' ? (
                        <svg viewBox="0 0 24 24" className="status-svg success-icon">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" fill="none" />
                          <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="status-svg error-icon">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
                          <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                      <span>{formStatus.text}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                type="submit"
                className={`premium-submit-btn ${isSubmitting ? 'submitting' : ''} ${formStatus.type === 'success' ? 'btn-success' : ''}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="btn-loading-spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : formStatus.type === 'success' ? (
                  <>
                    <span>Sent!</span>
                    <svg viewBox="0 0 24 24" className="submit-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" className="submit-arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" />
                    </svg>
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;