-- Portfolio Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  tags JSON,
  github_url VARCHAR(500),
  live_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact Messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'responded') DEFAULT 'new',
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(100) NOT NULL,
  skill_name VARCHAR(100) NOT NULL,
  proficiency INT DEFAULT 80,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_company VARCHAR(255),
  message TEXT NOT NULL,
  rating INT DEFAULT 5,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  duration_start DATE NOT NULL,
  duration_end DATE,
  description TEXT,
  is_current BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_email ON contact_messages(email);
CREATE INDEX idx_created_at ON contact_messages(created_at);
CREATE INDEX idx_skill_category ON skills(category);

-- Insert sample projects
INSERT INTO projects (title, description, tags, github_url, live_url) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with React frontend, Node.js backend, and MySQL database', JSON_ARRAY('React', 'Node.js', 'MySQL', 'Stripe'), 'https://github.com/user/ecommerce', 'https://ecommerce-app.com'),
('Task Management System', 'Collaborative task management application with real-time updates', JSON_ARRAY('React', 'Express.js', 'MongoDB', 'Socket.io'), 'https://github.com/user/task-manager', 'https://task-manager-app.com'),
('Analytics Dashboard', 'Interactive analytics dashboard with data visualization', JSON_ARRAY('React', 'D3.js', 'Node.js', 'PostgreSQL'), 'https://github.com/user/analytics', 'https://analytics-dashboard.com'),
('Social Media API', 'RESTful API for social media platform', JSON_ARRAY('Node.js', 'Express', 'MongoDB', 'JWT'), 'https://github.com/user/social-api', 'https://social-api-docs.com');

-- Insert sample skills
INSERT INTO skills (category, skill_name, proficiency) VALUES
('Frontend', 'React', 95),
('Frontend', 'JavaScript', 95),
('Frontend', 'HTML/CSS', 90),
('Frontend', 'Tailwind CSS', 90),
('Backend', 'Node.js', 90),
('Backend', 'Express.js', 90),
('Backend', 'RESTful APIs', 88),
('Database', 'MySQL', 88),
('Database', 'MongoDB', 85),
('Database', 'PostgreSQL', 82),
('Tools', 'Git', 90),
('Tools', 'Docker', 82),
('Tools', 'AWS', 80);
