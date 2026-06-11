const Contact = require('../models/Contact');
const { validateContactForm } = require('../utils/validation');

exports.createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    const { error } = validateContactForm({ name, email, subject, message });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const ip_address = req.ip || req.connection.remoteAddress;
    
    const result = await Contact.create({
      name,
      email,
      subject,
      message,
      ip_address
    });

    res.status(201).json({
      success: true,
      message: 'Message received successfully!',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating contact message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.getAll();
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const message = await Contact.getById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Mark as read
    await Contact.updateStatus(req.params.id, 'read');
    
    res.status(200).json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({ error: 'Failed to fetch message' });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    await Contact.delete(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};
