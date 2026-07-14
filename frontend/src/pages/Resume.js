import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Resume.css';
const Resume = ({ darkMode }) => {
  // Resume section with two approaches:
  // 1. Download PDF button to your actual resume file
  // 2. Career highlights (not repeating resume content, but key achievements)
  
  // TO MODIFY: 
  // 1. Update resumeUrl with path to your PDF resume file
  // 2. Replace highlights with your actual career achievements

  const resumeUrl = './resume.pdf'; // Change this to your resume file path
  
  const highlights = [
    {
      icon: '🎯',
      title: 'Problem Solver',
      description: 'Solved 450+ algorithmic problems on LeetCode, improving logical thinking and coding proficiency'
    },
    {
      icon: '🚀',
      title: 'Full-Stack Builder',
      description: 'Developed 5+ production-ready applications using React, Flask, and PostgreSQL'
    },
    {
      icon: '📚',
      title: 'Continuous Learner',
      description: 'Earned 10+ certifications from leading platforms (AWS, Google Cloud, Udemy, Coursera)'
    },
    {
      icon: '🤝',
      title: 'Team Player',
      description: 'Collaborated with cross-functional teams, mentored junior developers, contributed to open-source'
    },
    {
      icon: '💡',
      title: 'Innovation Minded',
      description: 'Explored AI/ML applications, built intelligent solutions, stayed updated with latest tech trends'
    },
    {
      icon: '⚡',
      title: 'Performance Focused',
      description: 'Optimized applications for speed and scalability, achieving 40% performance improvements'
    }
  ];

  return (
    <section id="resume" className={`resume ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resume & Highlights
        </motion.h2>

        {/* Download Button */}
        <motion.div 
          className="resume-download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={resumeUrl}
            download
            className="download-btn"
            whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Grab My Resume
          </motion.a>
          <p className="download-hint">PDF • Updated regularly</p>
        </motion.div>

        {/* Career Highlights (Unique, not resume repeat) */}
        <motion.div
          className="highlights-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Key Achievements</h3>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;