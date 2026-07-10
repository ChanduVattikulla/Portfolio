import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
import 'devicon/devicon.min.css';

/*
  ============================================
  HOW TO ADD A NEW SKILL LATER
  ============================================
  1. Find the devicon class name at: https://devicon.dev
  2. Add an object to the `skills` array below:
     { name: 'Docker', icon: 'devicon-docker-plain colored' }
  3. Done — icon + name will render automatically.

  ------------------------------------------------------
  REFERENCE: common classes for skills you'll likely add
  (not added yet — copy the line into `skills` when ready)
  ------------------------------------------------------

  -- Cloud / DevOps --
  AWS         : devicon-amazonwebservices-plain-wordmark colored
  Docker      : devicon-docker-plain colored
  Kubernetes  : devicon-kubernetes-plain colored
  Nginx       : devicon-nginx-original colored
  Linux       : devicon-linux-plain colored

  -- Full Stack / Backend --
  Node.js     : devicon-nodejs-plain colored
  Express     : devicon-express-original            (mono, no "colored" variant)
  Next.js     : devicon-nextjs-plain                (mono, no "colored" variant)
  Java        : devicon-java-plain colored
  Spring      : devicon-spring-plain colored
  C++         : devicon-cplusplus-plain colored
  C#          : devicon-csharp-plain colored
  TypeScript  : devicon-typescript-plain colored
  Redis       : devicon-redis-plain colored
  GraphQL     : devicon-graphql-plain colored
  Django      : devicon-django-plain colored

  -- AI / ML --
  TensorFlow  : devicon-tensorflow-original colored
  PyTorch     : devicon-pytorch-original colored
  NumPy       : devicon-numpy-original colored
  Pandas      : devicon-pandas-original colored
  Scikit-learn: devicon-scikitlearn-plain colored
  Jupyter     : devicon-jupyter-plain colored

  Note: if devicon doesn't have a "colored" class for something,
  drop the word "colored" — it'll render devicon's default (often mono).
  Always check https://devicon.dev live search before guessing a name.
  ============================================
*/

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' },
    { name: ' AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'REST APIs', icon: <span className="emoji-icon">🔗</span> },
{ name: 'Git & GitHub', icon: 'devicon-github-original' },
{ name: 'Problem Solving', icon: <span className="emoji-icon">🧩</span> },
  ];

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
              <span className="skill-icon">
  {typeof skill.icon === 'string' ? <i className={skill.icon}></i> : skill.icon}
</span>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;