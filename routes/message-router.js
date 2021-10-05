const express = require('express');
const authController = require('../controllers/authController');
const messageController = require('../controllers/messageController');
/**
 * create Router for the Message class
 */
const router = express.Router();
// Check that the user is logged
router.use(authController.protect);

// CRUD for the message object
router.get('/', messageController.getAllMessages);
router.get('/:id', messageController.getMessage);
router.post('/', messageController.createMessage);
router.put('/:id', messageController.updateMessage);
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
