import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = ({ darkMode }) => {
  const educationData = [
    {
      id: 1,
      year: '2024 – 2028',
      degree: 'B.Tech — Computer Science Engineering (Cyber Security)',
      institution: 'Narsimha Reddy Engineering College (NRCM)',
      description: 'Building strong foundations in software engineering, data structures, and security principles while actively participating in hackathons and coding competitions.',
      metrics: [
        { value: 'CGPA: 8.33/10', icon: '📊' },
        { value: 'Elite Coder', icon: '🏆' }
      ]
    },
    {
      id: 2,
      year: '2021 – 2023',
      degree: 'Intermediate — MPC (Maths, Physics, Chemistry)',
      institution: 'SKK Junior College',
      description: 'Developed strong analytical and problem-solving skills through rigorous coursework in mathematics and physical sciences.',
      metrics: [
        { value: 'Percentage: 92.3%', icon: '📈' },
        { value: 'Top Ranker', icon: '🏅' }
      ]
    },
    {
      id: 3,
      year: '2021',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'ZPHS High School',
      description: 'Completed secondary education with distinction, demonstrating consistent academic excellence across all subjects.',
      metrics: [
        { value: 'Marks: 596/600', icon: '⭐' },
        { value: 'Academic Excellence', icon: '⭐' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="education" className={`education ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Academic Journey
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Where I learned to think, build, and grow
        </motion.p>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item) => (
            <motion.div key={item.id} className="education-item" variants={itemVariants}>
              <span className="timeline-dot"></span>

              <div className="education-card">
                <div className="education-content">
                  <div className="education-header">
                    <h3 className="education-degree">{item.degree}</h3>
                    <span className="education-year">{item.year}</span>
                  </div>

                  <p className="education-institution">{item.institution}</p>
                  <p className="education-description">{item.description}</p>

                  <div className="education-metrics">
                    {item.metrics.map((metric, idx) => (
                      <span key={idx} className="metric-badge">
                        {metric.icon && <span className="metric-icon">{metric.icon}</span>}
                        <span className="metric-value">{metric.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;