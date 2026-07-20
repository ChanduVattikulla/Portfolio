import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const roles = [
  'Full-Stack Developer & AI Enthusiast',
  'React & Python Specialist',
  'Cloud & AI Engineer',
  'Open Source Contributor'
];

const Hero = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      setDisplayText('');
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      return;
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, isPaused]); // ✅ FIX: removed `roles`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="hero" className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="highlight">Chandu Vattikulla</span>
          </motion.h1>
          
          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor"></span>
          </motion.h2>
          
          <motion.p className="hero-tagline" variants={itemVariants}>
            I build modern web applications with React, craft intelligent solutions with AI, and share my journey on GitHub. Let's create something amazing together.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/Chandu_Vattikulla_Resume.pdf', '_blank')}
            >
              Get My Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image-wrapper" variants={itemVariants}>
          <motion.div 
            className={`profile-circle floating ${darkMode ? 'dark' : 'light'}`}
            initial={{ y: 0, scale: 0.98 }}
            animate={{ y: [0, -16, 0], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="pulse-ring" aria-hidden="true"></div>
            <img src="/images/profile.jpeg" alt="Profile" className="profile-img" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;