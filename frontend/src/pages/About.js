import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/About.css';

const About = ({ darkMode }) => {
  // About section with expandable "Read More" functionality
  // Content shows in a styled container with smooth expand/collapse animation
  
  const [isExpanded, setIsExpanded] = useState(false);

  const fullContent = `I'm a B.Tech Computer Science student with a passion for building modern web applications and exploring the intersection of web development and artificial intelligence. My journey in tech began with curiosity and has evolved into a commitment to continuous learning and excellence.

Over the past year, I've worked on diverse projects ranging from full-stack web applications to AI-powered solutions. I specialize in React for frontend development, Python and Flask for backend, and have experience with PostgreSQL and MongoDB for data persistence. I'm equally comfortable working solo or collaborating with teams.

Beyond coding, I'm an active member of the developer community. I contribute to open-source projects, solve complex problems on LeetCode, and love sharing my knowledge through GitHub. I believe in writing clean, maintainable code and creating user experiences that genuinely matter. When I'm not coding, you'll find me exploring new technologies, reading about machine learning breakthroughs, or mentoring junior developers.`;

  const shortContent = `I'm a B.Tech Computer Science student passionate about building modern web applications and exploring artificial intelligence. With hands-on experience in full-stack development, I've worked on diverse projects from real-time web apps to AI solutions.`;

  return (
    <section id="about" className={`about ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="about-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={`about-container ${darkMode ? 'dark' : 'light'}`}>
            <motion.div className="about-content">
              <p>{shortContent}</p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p style={{ marginTop: '1rem' }}>{fullContent.substring(shortContent.length)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Read More / Read Less button at bottom center */}
            <motion.button
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;