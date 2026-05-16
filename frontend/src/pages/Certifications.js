import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Certifications.css';
const Certifications = ({ darkMode }) => {
  // Premium certification gallery with click-to-modal functionality
  // TO MODIFY: Replace certs array with your actual 10+ certifications
  // Add certificate image URL and verification links for each
  
  const certs = [
    {
      id: 1,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      image: 'https://imgs.search.brave.com/_rKP3ZgbeQzxznZy8cLocUVYT12V6xRbOdjcEy76ACQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZC1t/YWluc2l0ZS1jZG4u/dHV0b3JpYWxzZG9q/by5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvQVdT/LUNlcnRpZmllZC1T/b2x1dGlvbnMtQXJj/aGl0ZWN0LVByb2Zl/c3Npb25hbC1qcGcu/d2VicA',
      certImage: 'https://imgs.search.brave.com/_rKP3ZgbeQzxznZy8cLocUVYT12V6xRbOdjcEy76ACQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZC1t/YWluc2l0ZS1jZG4u/dHV0b3JpYWxzZG9q/by5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvQVdT/LUNlcnRpZmllZC1T/b2x1dGlvbnMtQXJj/aGl0ZWN0LVByb2Zl/c3Npb25hbC1qcGcu/d2VicA',
      verifyLink: 'https://aws.amazon.com/certification',
      issueDate: 'Jan 2024'
    },
    {
      id: 2,
      title: 'Google Cloud Associate',
      issuer: 'Google Cloud',
      image: 'https://imgs.search.brave.com/6IXtGWtQqTeiUu9Q8iyv4LLBTouR8wJEdYQxc0OzNc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpbGVhcm4u/Y29tL2ljZTkvY2Vy/dGlmaWNhdGVzL0dv/b2dsZS1DbG91ZC1D/ZXJ0aWZpY2F0aW9u/cy9Hb29nbGVfQXNz/b2NpYXRlX0Nsb3Vk/X0VuZ2luZWVyX1Ry/YWluaW5nXzA3XzAx/XzIwMjUuanBn',
      certImage: 'https://imgs.search.brave.com/6IXtGWtQqTeiUu9Q8iyv4LLBTouR8wJEdYQxc0OzNc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpbGVhcm4u/Y29tL2ljZTkvY2Vy/dGlmaWNhdGVzL0dv/b2dsZS1DbG91ZC1D/ZXJ0aWZpY2F0aW9u/cy9Hb29nbGVfQXNz/b2NpYXRlX0Nsb3Vk/X0VuZ2luZWVyX1Ry/YWluaW5nXzA3XzAx/XzIwMjUuanBn',
      verifyLink: 'https://cloud.google.com/certification',
      issueDate: 'Dec 2023'
    },
    {
      id: 3,
      title: 'React Developer Certified',
      issuer: 'Udemy',
      image: 'https://imgs.search.brave.com/3VAPj4K2Uw44fjNXp7fv7F0AmdPNNgGskk6qpkaIB90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JvbWFjYW1wdXMu/Y29tL3B1YmxpYy9p/bWcvQ2VydGlmaWNh/dGUtbmV3LWZpbGUu/d2VicA',
      certImage: 'https://imgs.search.brave.com/3VAPj4K2Uw44fjNXp7fv7F0AmdPNNgGskk6qpkaIB90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JvbWFjYW1wdXMu/Y29tL3B1YmxpYy9p/bWcvQ2VydGlmaWNh/dGUtbmV3LWZpbGUu/d2VicA',
      verifyLink: 'https://udemy.com/certificate',
      issueDate: 'Nov 2023'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      issuer: 'Coursera',
      image: 'https://imgs.search.brave.com/BpRrTcUZ2HA1EOy50heT4ZxPhZmy-VXfpsiLMSZ-vTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ueHR3/YXZlLmltZ2l4Lm5l/dC9jY2JwLXdlYnNp/dGUvQmxvZ3MvaG9t/ZS9iZXN0LWZ1bGwt/c3RhY2stZGV2ZWxv/cGVyLWNvdXJzZXMu/c3ZnP2F1dG89Zm9y/bWF0LGNvbXByZXNz/JnE9ODA',
      certImage: 'https://imgs.search.brave.com/BpRrTcUZ2HA1EOy50heT4ZxPhZmy-VXfpsiLMSZ-vTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ueHR3/YXZlLmltZ2l4Lm5l/dC9jY2JwLXdlYnNp/dGUvQmxvZ3MvaG9t/ZS9iZXN0LWZ1bGwt/c3RhY2stZGV2ZWxv/cGVyLWNvdXJzZXMu/c3ZnP2F1dG89Zm9y/bWF0LGNvbXByZXNz/JnE9ODA',
      verifyLink: 'https://coursera.org/certificate',
      issueDate: 'Oct 2023'
    },
    {
      id: 5,
      title: 'Python Expert',
      issuer: 'DataCamp',
      image: 'https://via.placeholder.com/200x200?text=Python',
      certImage: 'https://via.placeholder.com/600x400?text=Python+Certificate',
      verifyLink: 'https://datacamp.com/certificate',
      issueDate: 'Sep 2023'
    },
    {
      id: 6,
      title: 'JavaScript Mastery',
      issuer: 'Codecademy',
      image: 'https://via.placeholder.com/200x200?text=JavaScript',
      certImage: 'https://via.placeholder.com/600x400?text=JavaScript+Certificate',
      verifyLink: 'https://codecademy.com/certificate',
      issueDate: 'Aug 2023'
    },
    {
      id: 7,
      title: 'Database Design',
      issuer: 'LinkedIn Learning',
      image: 'https://via.placeholder.com/200x200?text=Database',
      certImage: 'https://via.placeholder.com/600x400?text=Database+Certificate',
      verifyLink: 'https://linkedin.com/learning',
      issueDate: 'Jul 2023'
    },
    {
      id: 8,
      title: 'Web Development',
      issuer: 'FreeCodeCamp',
      image: 'https://via.placeholder.com/200x200?text=WebDev',
      certImage: 'https://via.placeholder.com/600x400?text=WebDev+Certificate',
      verifyLink: 'https://freecodecamp.org',
      issueDate: 'Jun 2023'
    },
    {
      id: 9,
      title: 'Git & GitHub',
      issuer: 'Udacity',
      image: 'https://via.placeholder.com/200x200?text=Git',
      certImage: 'https://via.placeholder.com/600x400?text=Git+Certificate',
      verifyLink: 'https://udacity.com',
      issueDate: 'May 2023'
    },
    {
      id: 10,
      title: 'REST APIs',
      issuer: 'Postman Learning',
      image: 'https://via.placeholder.com/200x200?text=REST',
      certImage: 'https://via.placeholder.com/600x400?text=REST+Certificate',
      verifyLink: 'https://postman.com/learning',
      issueDate: 'Apr 2023'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);
const [wheelDeltaX, setWheelDeltaX] = useState(0);// ADDED THIS FOR ONE CERT SCROLL AT A TIME 
 // Keyboard arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % certs.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certs.length]);
  const getVisibleCerts = () => {
    const prev = (currentIndex - 1 + certs.length) % certs.length;
    const curr = currentIndex;
    const next = (currentIndex + 1) % certs.length;
    return { prev: certs[prev], curr: certs[curr], next: certs[next] };
  };

  const { prev, curr, next } = getVisibleCerts();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
  };
  const handleTouchStart = (e) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchEnd = (e) => {
  setTouchEnd(e.changedTouches[0].clientX);
  const minSwipeDistance = 50;
  if (touchStart - touchEnd > minSwipeDistance) {
    handleNext();
  } else if (touchEnd - touchStart > minSwipeDistance) {
    handlePrev();
  }
};
const handleWheel = (e) => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    e.preventDefault();
    const newDelta = wheelDeltaX + e.deltaX;
    const threshold = 50; // pixels needed to move one certificate
    if (Math.abs(newDelta) >= threshold) {
      if (newDelta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setWheelDeltaX(0);
    } else {
      setWheelDeltaX(newDelta);
    }
  } else {
    // Reset accumulator when scrolling vertically
    setWheelDeltaX(0);
  }
};
  return (
    <section id="certifications" className={`certifications ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Badges
        </motion.h2>

        {/* Gallery Container */}
        <motion.div
          className="gallery-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
      <div 
  className={`gallery ${darkMode ? 'dark' : 'light'}`}
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  onWheel={handleWheel}
>
            {/* Left Badge (Dimmed) */}
            <motion.div 
              className="gallery-badge left-badge"
              animate={{ opacity: 0.4 }}
              onClick={() => handlePrev()}
              style={{ cursor: 'pointer' }}
            >
              <img src={prev.image} alt={prev.title} loading="lazy" />
            </motion.div>

            {/* Center Badge (Spotlight) */}
            <motion.div 
              className="gallery-badge center-badge"
              key={curr.id}
              animate={{ 
                opacity: 1,
                boxShadow: darkMode 
                  ? '0 0 40px rgba(59, 130, 246, 0.6)' 
                  : '0 0 30px rgba(59, 130, 246, 0.4)'
              }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedCert(curr)}
              style={{ cursor: 'pointer' }}
            >
              <img src={curr.image} alt={curr.title} loading="lazy" />
            </motion.div>

            {/* Right Badge (Dimmed) */}
            <motion.div 
              className="gallery-badge right-badge"
              animate={{ opacity: 0.4 }}
              onClick={() => handleNext()}
              style={{ cursor: 'pointer' }}
            >
              <img src={next.image} alt={next.title} loading="lazy" />
            </motion.div>

            {/* Overlaid Navigation Arrows */}
            <motion.button 
              className="gallery-arrow left"
              onClick={handlePrev}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            <motion.button 
              className="gallery-arrow right"
              onClick={handleNext}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>
          </div>

          {/* Certificate Info */}
          <motion.div 
            className="cert-info"
            key={curr.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{curr.title}</h3>
            <p>{curr.issuer} • {curr.issueDate}</p>
            <div className="cert-actions">
              <motion.button
                className="verify-btn"
                onClick={() => setSelectedCert(curr)}
                whileHover={{ scale: 1.05 }}
              >
                View Certificate
              </motion.button>
              <a href={curr.verifyLink} target="_blank" rel="noopener noreferrer" className="verify-link">
                Verify →
              </a>
            </div>
            <p className="cert-counter">{currentIndex + 1} / {certs.length}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal Popup for Certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className={`cert-modal ${darkMode ? 'dark' : 'light'}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="modal-close"
                onClick={() => setSelectedCert(null)}
                whileHover={{ scale: 1.2 }}
              >
                ✕
              </motion.button>
              
              <img src={selectedCert.certImage} alt={selectedCert.title} className="cert-image" loading="lazy" />
              
              <div className="modal-info">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer}</p>
                <a 
                  href={selectedCert.verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-link-modal"
                >
                  Verify This Certificate →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;