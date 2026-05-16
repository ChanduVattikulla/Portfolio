import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = ({ darkMode }) => {
  // Hero section with 70% text left, 30% image right layout
  // Image is now larger (300px circle) and positioned prominently
  
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
        {/* LEFT: Text (65%) */}
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm <span className="highlight">Chandu Vattikulla</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Full-Stack Developer & AI Enthusiast
          </motion.h2>
          
          <motion.p 
            className="hero-tagline"
            variants={itemVariants}
          >
            I build modern web applications with React, craft intelligent solutions with AI, and share my journey on GitHub. Let's create something amazing together.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
             whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Profile Image (35%) */}
        <motion.div 
          className="hero-image-wrapper"
          variants={itemVariants}
        >
          <motion.div 
            className={`profile-circle ${darkMode ? 'dark' : 'light'}`}
            animate={darkMode ? { boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.6)', '0 0 20px rgba(59, 130, 246, 0.3)'] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Replace with your image: Change src="/path/to/your/photo.jpg" */}
            <img src="/images/profile.jpeg" alt="Profile" className="profile-img" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;