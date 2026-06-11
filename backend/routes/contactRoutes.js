const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST: Create new contact message
router.post('/', contactController.createMessage);

// GET: Get all messages (admin)
router.get('/', contactController.getAllMessages);

// GET: Get single message by ID
router.get('/:id', contactController.getMessageById);

// DELETE: Delete a message
router.delete('/:id', contactController.deleteMessage);

module.exports = router;
