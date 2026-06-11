const db = require('../config/database');

class Contact {
  static create(contactData) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO contact_messages (name, email, subject, message, ip_address) VALUES (?, ?, ?, ?, ?)';
      const values = [
        contactData.name,
        contactData.email,
        contactData.subject,
        contactData.message,
        contactData.ip_address
      ];

      db.query(query, values, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM contact_messages ORDER BY created_at DESC';
      db.query(query, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM contact_messages WHERE id = ?';
      db.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results[0]);
      });
    });
  }

  static updateStatus(id, status) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE contact_messages SET status = ? WHERE id = ?';
      db.query(query, [status, id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM contact_messages WHERE id = ?';
      db.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }
}

module.exports = Contact;
