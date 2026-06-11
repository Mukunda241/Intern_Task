import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Naga Veera Mukunda S</h3>
            <p>Full Stack Developer | Creative Technologist | Problem Solver</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Full Stack Solutions</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">Design</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Naga Veera Mukunda S. All rights reserved.</p>
          <p>Designed & Developed with <span className="heart">♥</span> using React & Node.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
