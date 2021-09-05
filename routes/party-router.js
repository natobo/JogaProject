const express = require('express');
const authController = require('../controllers/authController');
const partyController = require('../controllers/partyController');
/**
 * Router for the User class
 */
const router = express.Router();
// Check that the user is logged
router.use(authController.protect);

// CRUD for the user object
router.get('/', partyController.getAllPartys);
router.get('/:id', partyController.getParty);
router.post('/', partyController.createParty);
router.put('/:id', partyController.updateParty);
router.delete('/:id', partyController.deleteParty);
module.exports = router;
