const express = require('express');
const authController = require('../controllers/authController');
const chatController = require('../controllers/chatController');
/**
 * Router for the Chat class
 */
const router = express.Router();
// Check that the user is logged
router.use(authController.protect);

// CRUD for the chat object
router.get('/', chatController.getAllChats);
router.get('/:id', chatController.getChat);
router.post('/', chatController.createChat);
router.put('/:id', chatController.updateChat);
router.delete('/:id', chatController.deleteChat);

module.exports = router;
