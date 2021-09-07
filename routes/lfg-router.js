const express = require('express');
const authController = require('../controllers/authController');
const lfgController = require('../controllers/lfgController');
/**
 * Router for the LFG class
 */
const router = express.Router();

// Check that the user is logged
router.use(authController.protect);

// CRUD for the LFG object
router.get('/', lfgController.getAllLFGs);
router.get('/:id', lfgController.getLFG);
router.post('/', lfgController.createLFG);
router.put('/:id', lfgController.updateLFG);
router.delete('/:id', lfgController.deleteLFG);

module.exports = router;
