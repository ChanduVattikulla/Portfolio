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
        { 
          value: 'CGPA: 8.33/10', 
          svg: <svg viewBox="0 0 24 24" className="metric-vector"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg> 
        },
        { 
          value: 'Elite Coder', 
          svg: <svg viewBox="0 0 24 24" className="metric-vector"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/></svg> 
        }
      ]
    },
    {
      id: 2,
      year: '2021 – 2023',
      degree: 'Intermediate — MPC (Maths, Physics, Chemistry)',
      institution: 'SKK Junior College',
      description: 'Developed strong analytical and problem-solving skills through rigorous coursework in mathematics and physical sciences.',
      metrics: [
        { 
          value: 'Percentage: 92.3%', 
          svg: <svg viewBox="0 0 24 24" className="metric-vector"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> 
        },
        { 
          value: 'Top Ranker', 
          svg: <svg viewBox="0 0 24 24" className="metric-vector"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg> 
        }
      ]
    },
    {
      id: 3,
      year: '2021',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'ZPHS High School',
      description: 'Completed secondary education with distinction, demonstrating consistent academic excellence across all subjects.',
      metrics: [
        { 
          value: 'Marks: 596/600', 
          svg: <svg viewBox="0 0 24 24" className="metric-vector"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 
        },
        { 
          value: 'Academic Excellence', 
          svg: <svg viewBox="0 0 24 24" className="metric-vector"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg> 
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="education" className={`education-section platform-layer ${darkMode ? 'dark' : 'light'}`}>
      <div className="edu-bounded-container">
        
        <div className="edu-headline-block">
          <motion.h2
            className="edu-main-title"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Academic Journey
          </motion.h2>

          <motion.p
            className="edu-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Where I learned to think, build, and grow
          </motion.p>
        </div>

        <motion.div
          className="edu-timeline-backbone"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item) => (
            <motion.div key={item.id} className="edu-timeline-node" variants={itemVariants}>
              <span className="edu-node-dot"></span>

              <div className="edu-interactive-card">
                <div className="edu-card-interior">
                  
                  <div className="edu-card-header">
                    <h3 className="edu-degree-title">{item.degree}</h3>
                    <span className="edu-year-badge">{item.year}</span>
                  </div>

                  <p className="edu-institution-label">{item.institution}</p>
                  <p className="edu-description-text">{item.description}</p>

                  <div className="edu-metrics-flexway">
                    {item.metrics.map((metric, idx) => (
                      <span key={idx} className="edu-metric-pill">
                        {metric.svg && <span className="edu-metric-icon-wrap">{metric.svg}</span>}
                        <span className="edu-metric-data-val">{metric.value}</span>
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