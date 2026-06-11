import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Expertise in modern web technologies and tools</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
