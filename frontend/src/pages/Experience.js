import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      id: 1,
      role: 'Python Fullstack Developer Internship',
      company: 'EduSkills',
      duration: 'March 2026 (1 month)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'March 18, 2026',
      verifyLink: 'https://verify.eduskills.com/cert/xyz',
      description: 'Built full‑stack web applications using Django and React, focusing on database integration and REST APIs.Built full‑stack web applications using Django and React, focusing on database integration and REST APIs',
      techStack: ['Python', 'Django', 'SQL', 'React', 'JWT'],
      achievements: [
        'Designed database schemas for 3+ modules',
        'Implemented JWT authentication',
        'Deployed applications on Render'
      ],
      outcome: 'Delivered 2 production‑ready features used by 50+ internal users',
      icon: '🐍',
      color: '#3b82f6'
    },
    // add more experiences following the same structure
    {
      id: 1,
      role: 'Python Fullstack Developer Internship',
      company: 'EduSkills',
      duration: 'March 2026 (1 month)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'March 18, 2026',
      verifyLink: 'https://verify.eduskills.com/cert/xyz',
      description: 'Built full‑stack web applications using Django and React, focusing on database integration and REST APIs.',
      techStack: ['Python', 'Django', 'SQL', 'React', 'JWT'],
      achievements: [
        'Designed database schemas for 3+ modules',
        'Implemented JWT authentication',
        'Deployed applications on Render'
      ],
      outcome: 'Delivered 2 production‑ready features used by 50+ internal users',
      icon: '🐍',
      color: '#3b82f6'
    }
  ];

  return (
    <section id="experience" className={`experience ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 className="section-title">Experience</motion.h2>
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="timeline-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              {/* Top row: role + actions */}
              <div className="card-top">
                <div className="role-group">
                  <div className="exp-icon" style={{ backgroundColor: exp.color }}>
                    {exp.icon}
                  </div>
                  <h3 className="exp-role">{exp.role}</h3>
                </div>
                <div className="action-group">
                  {exp.issueDate && <span className="issue-date">{exp.issueDate}</span>}
                  {exp.verifyLink && (
                    <div className="action-buttons">
                      <a href={exp.verifyLink} target="_blank" rel="noopener noreferrer" className="action-btn">
                        Verify
                      </a>
                      <button className="action-btn" onClick={() => navigator.clipboard.writeText(exp.verifyLink)}>
                        Copy
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Subheader: company, mode, duration */}
              <div className="card-subheader">
                <span className="company">{exp.company}</span>
                <span className="meta-badge">{exp.mode}</span>
                <span className="meta-badge">{exp.type}</span>
                <span className="duration">{exp.duration}</span>
              </div>

              {/* Description */}
              <p className="exp-description">{exp.description}</p>

              {/* Tech stack – with muted label */}
              <div className="tech-stack">
                <span className="tech-label">TECH STACK</span>
                <span className="tech-items">{exp.techStack.join(' · ')}</span>
              </div>

              {/* Achievements – muted checkmarks */}
              <ul className="achievements-list">
                {exp.achievements.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* Outcome – subtle accent */}
              {exp.outcome && <div className="outcome">{exp.outcome}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;