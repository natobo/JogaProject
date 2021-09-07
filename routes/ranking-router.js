const express = require('express');
const authController = require('../controllers/authController');
const rankingController = require('../controllers/rankingController');

/**
 * Router for the ranking class
 */
const router = express.Router();

// Check that the user is logged
router.use(authController.protect);

// CRUD for the ranking object
router.get('/', rankingController.getAllRankings);
router.get('/:id', rankingController.getRanking);
router.post('/', rankingController.createRanking);
router.put('/:id', rankingController.updateRanking);
router.delete('/:id', rankingController.deleteRanking);

module.exports = router;
