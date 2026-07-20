import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';
import 'devicon/devicon.min.css';

const Experience = ({ darkMode }) => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (link, id) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const experiences = [
    {
      id: 3,
      role: 'Full Stack Development Intern',
      company: 'Thiranex',
      duration: 'May – June 2026 (2 months)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'June 4, 2026',
      verifyLink: 'https://www.thiranex.in/?verifyId=THX-MAY226-3796',
      techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
      achievements: [
        'Architected full-stack web applications using Django and MySQL.',
        'Engineered responsive user interfaces and integrated backend APIs for real-world projects.',
        'Strengthened production skills across database management, debugging, testing, and deployment.'
      ],
      outcome: 'Delivered production-ready full-stack applications with clean, modular codebases.',
      icon: 'devicon-python-plain colored'
    },
    {
      id: 2,
      role: 'AI-Powered Cloud Engineer Virtual Intern',
      company: 'EduSkills Foundation®',
      duration: 'April – June 2026 (3 months)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'July 10, 2026',
      verifyLink: 'https://certificate.eduskillsfoundation.org/verify/4662941f3c46960112cc/4662941f3c46960112cc',
      techStack: ['AWS EC2', 'S3', 'Lambda', 'API Gateway', 'IAM', 'Generative AI', 'CloudFormation'],
      achievements: [
        'Provisioned and managed EC2 compute instances configured with auto-scaling.',
        'Deployed serverless microservices using AWS Lambda and API Gateway.',
        'Authored granular S3 bucket policies and IAM roles for least-privilege security access.'
      ],
      outcome: 'Earned 10 AWS Educate skill badges & constructed a serverless application prototype.',
      icon: 'devicon-amazonwebservices-plain-wordmark colored'
    },
    {
      id: 1,
      role: 'Python Fullstack Developer Intern',
      company: 'EduSkills',
      duration: 'Jan – March 2026 (10 weeks)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'March 18, 2026',
      verifyLink: 'https://certificate.eduskillsfoundation.org/verify/462bb21459ddeb5f008d/462bb21459ddeb5f008d',
      techStack: ['Python', 'Django', 'SQL', 'React', 'JWT'],
      achievements: [
        'Designed and normalized database schemas for 3+ core web modules.',
        'Implemented JWT authentication middleware across secure endpoint routes.',
        'Configured CI/CD pipelines to automatically deploy build artifacts onto Render.'
      ],
      outcome: 'Shipped 2 production features active across 50+ internal users.',
      icon: 'devicon-python-plain colored'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="experience" className={`experience ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Building real-world solutions, one project at a time
        </motion.p>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} className="experience-item" variants={itemVariants}>
              <span className="timeline-dot"></span>

              <div className="experience-card">
                <div className="experience-content">
                  {/* Card Header */}
                  <div className="card-top">
                    <div className="role-group">
                      <div className="exp-icon">
                        <i className={exp.icon}></i>
                      </div>
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <div className="card-subheader">
                          <span className="company">{exp.company}</span>
                          <span className="meta-badge">{exp.mode}</span>
                          <span className="meta-badge">{exp.type}</span>
                          <span className="duration">• {exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions & Dates */}
                    <div className="action-group">
                      {exp.issueDate && <span className="issue-date">Issued {exp.issueDate}</span>}
                      {exp.verifyLink && (
                        <div className="action-buttons">
                          <a href={exp.verifyLink} target="_blank" rel="noopener noreferrer" className="action-btn verify-btn">
                            Verify ↗
                          </a>
                          <button
                            className={`action-btn copy-btn ${copiedId === exp.id ? 'copied' : ''}`}
                            onClick={() => handleCopy(exp.verifyLink, exp.id)}
                            aria-label="Copy verification link"
                          >
                            {copiedId === exp.id ? (
                              <>
                                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Copied!
                              </>
                            ) : (
                              'Copy'
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <ul className="achievements-list">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {/* Interactive Tech Stack */}
                  <div className="tech-stack">
                    <span className="tech-label">STACK</span>
                    <div className="tech-chips">
                      {exp.techStack.map((tech, idx) => (
                        <span key={idx} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* High Impact Outcome Banner */}
                  {exp.outcome && (
                    <div className="outcome">
                      <span className="outcome-icon">💡</span>
                      <span><strong>Key Impact:</strong> {exp.outcome}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;