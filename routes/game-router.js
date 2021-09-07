const express = require('express');
const authController = require('../controllers/authController');
const gameController = require('../controllers/gameController');
/**
 * Router for the User class
 */
const router = express.Router();
// Check that the user is logged
router.use(authController.protect);

// CRUD for the user object
router.get('/', gameController.getAllGames);
router.get('/:id', gameController.getGame);
router.post('/', gameController.createGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);
module.exports = router;
