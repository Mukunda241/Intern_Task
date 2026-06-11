const db = require('../config/database');

class Project {
  static create(projectData) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO projects (title, description, image_url, tags, github_url, live_url) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [
        projectData.title,
        projectData.description,
        projectData.image_url,
        JSON.stringify(projectData.tags),
        projectData.github_url,
        projectData.live_url
      ];

      db.query(query, values, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM projects ORDER BY created_at DESC';
      db.query(query, (error, results) => {
        if (error) reject(error);
        else {
          const projectsWithParsedTags = results.map(project => ({
            ...project,
            tags: project.tags ? JSON.parse(project.tags) : []
          }));
          resolve(projectsWithParsedTags);
        }
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM projects WHERE id = ?';
      db.query(query, [id], (error, results) => {
        if (error) reject(error);
        else {
          if (results[0]) {
            results[0].tags = results[0].tags ? JSON.parse(results[0].tags) : [];
          }
          resolve(results[0]);
        }
      });
    });
  }

  static update(id, projectData) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE projects SET title = ?, description = ?, image_url = ?, tags = ?, github_url = ?, live_url = ? WHERE id = ?';
      const values = [
        projectData.title,
        projectData.description,
        projectData.image_url,
        JSON.stringify(projectData.tags),
        projectData.github_url,
        projectData.live_url,
        id
      ];

      db.query(query, values, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM projects WHERE id = ?';
      db.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }
}

module.exports = Project;
