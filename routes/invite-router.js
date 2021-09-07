const express = require('express');
const authController = require('../controllers/authController');
const inviteController = require('../controllers/inviteController');
/**
 * Router for the Invite class
 */
const router = express.Router();

// Check that the user is logged
router.use(authController.protect);
// CRUD for the user object
router.get('/', inviteController.getAllInvites);
router.get('/:id', inviteController.getInvite);
router.post('/', inviteController.createInvite);
router.put('/:id', inviteController.updateInvite);
router.delete('/:id', inviteController.deleteInvite);

module.exports = router;
