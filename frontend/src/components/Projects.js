import React from 'react';
import './Projects.css';

const Projects = () => {
  const project = {
    id: 2,
    title: 'Task Management System',
    description: 'Collaborative task management application with real-time updates, user authentication, and team collaboration features.',
    tags: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
    image: '✅',
    highlights: [
      'Real-time updates with Socket.io',
      'Secure user authentication & authorization',
      'Team collaboration and task assignment',
      'RESTful API with Express.js backend',
    ]
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Project</h2>
        <p className="section-subtitle">Showcasing my best work and technical expertise</p>
        
        <div className="project-showcase">
          <div className="project-card-large">
            <div className="project-image-large">
              <span>{project.image}</span>
            </div>
            <div className="project-content-large">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item, idx) => (
                  <li key={idx}><span className="highlight-dot">▸</span> {item}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <button className="project-link-btn">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
