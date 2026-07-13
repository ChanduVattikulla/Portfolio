import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';
import 'devicon/devicon.min.css';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
    id: 3,  // ← new unique ID
    role: 'Full Stack Development Intern',
    company: 'Thiranex',
    duration: 'May – June 2026 (2 months)',
    mode: 'Remote',
    type: 'Internship',
    issueDate: "June 4, 2026",        // no certificate verification yet
    verifyLink: 'https://www.thiranex.in/?verifyId=THX-MAY226-3796',       // no verification link yet
    description: 'Built full‑stack web applications using Python, Django, HTML, CSS, JavaScript, and MySQL. Developed responsive user interfaces and integrated backend functionality while working on real‑world projects. Strengthened practical skills in backend development, database management, debugging, testing, and deployment.',
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    achievements: [
      'Built full‑stack web applications using Django and MySQL',
      'Developed responsive user interfaces and integrated backend functionality',
      'Strengthened skills in backend development, database management, debugging, and testing'
    ],
    outcome: 'Completed real‑world full‑stack projects with a production‑ready codebase',
    icon: 'devicon-python-plain colored',  // or use 'devicon-django-plain colored' if you prefer
    color: 'transparent'  // transparent background (keeps icons clean)
  },
    {
      id: 2,
      role: 'AI-Powered Cloud Engineer Virtual Internship',
      company: 'EduSkills Foundation®',
      duration: 'April – June 2026 (3 months)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'July 10, 2026',
      verifyLink: 'https://certificate.eduskillsfoundation.org/verify/4662941f3c46960112cc/4662941f3c46960112cc',
      description: 'Gained hands-on experience through AWS labs covering cloud computing, networking, compute, storage, security, serverless, and Generative AI. Earned multiple AWS Educate skill badges by completing practical learning modules and assessments.',
      techStack: ['AWS EC2', 'S3', 'Lambda', 'API Gateway', 'IAM', 'Generative AI', 'CloudFormation'],
      achievements: [
      'Provisioned and managed EC2 instances with auto‑scaling',
      'Deployed serverless functions using AWS Lambda and API Gateway',
      'Designed S3 bucket policies and IAM roles for secure access',
      'Completed AWS Educate labs on AI/ML and serverless computing'
        ],
        outcome: 'Earned 10 AWS Educate skill badges; built a serverless application prototype',
      icon: 'devicon-amazonwebservices-plain-wordmark colored',
      color: 'transparent'  
    },
    {
      id: 1,
      role: 'Python Fullstack Developer Internship',
      company: 'EduSkills',
      duration: 'Jan – March 2026 (10 weeks)',
      mode: 'Remote',
      type: 'Internship',
      issueDate: 'March 18, 2026',
      verifyLink: 'https://certificate.eduskillsfoundation.org/verify/462bb21459ddeb5f008d/462bb21459ddeb5f008d',
      description: 'Built full‑stack web applications using Django and React, focusing on database integration and REST APIs.',
      techStack: ['Python', 'Django', 'SQL', 'React', 'JWT'],
      achievements: [
        'Designed database schemas for 3+ modules',
        'Implemented JWT authentication',
        'Deployed applications on Render'
      ],
      outcome: 'Delivered 2 production‑ready features used by 50+ internal users',
      icon: 'devicon-python-plain colored',
      color: 'transparent'
    },
    // add more experiences following the same structure
    
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
                    {typeof exp.icon === 'string' ? <i className={exp.icon}></i> : exp.icon}
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