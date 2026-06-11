import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a love for solving complex problems. 
              With expertise in modern web technologies, I create digital solutions that are not only visually stunning 
              but also highly functional and scalable.
            </p>
            <p>
              My journey in tech has taken me through various projects ranging from startups to enterprise applications. 
              I believe in continuous learning and staying updated with the latest trends in web development.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>Innovation</h3>
              <p>Always seeking creative solutions to technical challenges</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Performance</h3>
              <p>Building fast, optimized applications that scale efficiently</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🎨</div>
              <h3>Design</h3>
              <p>Crafting beautiful user interfaces with excellent UX</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔒</div>
              <h3>Security</h3>
              <p>Implementing best practices for secure applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
