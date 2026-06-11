import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Naga Veera Mukunda S</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer | Creative Technologist | Problem Solver
            </p>
            <p className="hero-description">
              I craft beautiful, functional digital experiences that combine modern design with robust technology. 
              Specialized in building scalable web applications with React, Node.js, and cloud technologies.
            </p>
            <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
            </button>
            
            <button
                className="btn btn-secondary"
                onClick={() => window.open("/Resume_Big.pdf", "_blank")}
            >
                View Resume
            </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span className="initials">SNVM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
