import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
const Skills = ({ darkMode }) => {
  // Skills section showing only REAL skills you actually use
  // TO MODIFY: Replace the skills array below with YOUR actual skills
  // Keep only skills you genuinely know, not everything on the internet
  
  const skills = [
    'React.js',
    'Python',
    'JavaScript',
    'Flask',
    'PostgreSQL',
    'MongoDB',
    'HTML/CSS',
    'REST APIs',
    'Git & GitHub',
    'Problem Solving',
  ];
  
  // If you want to add more skills, just add them to the array above
  // Example: 'Node.js', 'Docker', 'AWS', 'Machine Learning', etc.

  return (
    <section id="skills" className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Tools and technologies I work with
        </motion.p>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.12, y: -5 }}
            >
              <span className="skill-name">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;