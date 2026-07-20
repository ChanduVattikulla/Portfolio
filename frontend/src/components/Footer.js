import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'devicon/devicon.min.css';
import '../styles/Footer.css';

const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chanduvattikulla71@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        alert('Copy manually: chanduvattikulla71@gmail.com');
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chandu-vattikulla/',
      icon: <i className="devicon-linkedin-plain" aria-hidden="true" />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ChanduVattikulla',
      icon: <i className="devicon-github-original" aria-hidden="true" />,
    },
  ];

  return (
    <footer className={`site-footer-premium ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-premium-inner">
        
        {/* LEFT COLUMN: Identity, Availability & Context */}
        <motion.div 
          className="footer-premium-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="brand-meta-wrapper">
            <h2 className="footer-premium-name">Chandu Vattikulla</h2>
            <p className="footer-premium-tagline">Aspiring Software Engineer · Competitive Programmer</p>
          </div>

          {/* Status Grid — only the open‑to‑work token (no pulse) */}
          <div className="footer-status-grid">
            <div className="status-token open-to-work">
              <svg viewBox="0 0 24 24" className="token-icon" aria-hidden="true">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6L12 1.5 7.5 6ZM15 6.75V3.375L12.375 6H15Zm-6 0H9.625L12 3.375V6.75H9Z" clipRule="evenodd" />
              </svg>
              <span className="token-label">Open to Internship Opportunities</span>
            </div>
          </div>
          
          <div className="legal-metadata">
            <p className="footer-premium-copyright">© {year} Chandu Vattikulla. All Rights Reserved.</p>
            <p className="footer-premium-credit">Designed &amp; Developed by Chandu Vattikulla</p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Control center & Navigation Grid */}
        <motion.div 
          className="footer-premium-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Action Row containing Socials, Email Clipboard, and Resume Triggers */}
          <div className="action-control-center">
            <div className="social-utility-group">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="premium-circle-btn"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}

              {/* Enhanced Copy-to-Clipboard Email Trigger */}
              <div className="email-clipboard-wrapper">
                <motion.button
                  className="premium-circle-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm1.5.75v12.75c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V6A.75.75 0 0 0 18.75 5.25H5.25a.75.75 0 0 0-.75.75Zm1.395.562 6.855 4.59 6.855-4.59a.75.75 0 0 0-.81-1.28L12 10.94 5.655 5.281a.75.75 0 1 0-.81 1.28Z" />
                  </svg>
                </motion.button>
                <AnimatePresence>
                  {copied && (
                    <motion.span 
                      className="clipboard-tooltip"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -35, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Premium CTA Buttons Group */}
            <div className="cta-button-group">
              <motion.a 
                href="/resume.pdf" // Update with real path
                download
                className="premium-cta-btn secondary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg viewBox="0 0 24 24" className="btn-icon" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                <span>Resume</span>
              </motion.a>

              <motion.button
                className="premium-circle-btn scroll-top"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.92 }}
              >
                <svg viewBox="0 0 24 24" className="arrow-top">
                  <path d="M12 4l-8 8 1.5 1.5L12 7l6.5 6.5L20 12z" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Navigation links grid */}
          <nav className="footer-premium-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="premium-nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;