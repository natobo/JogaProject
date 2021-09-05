const express = require('express');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');
/**
 * Router for the Review class
 */
const router = express.Router();
// Check that the user is logged
router.use(authController.protect);
// CRUD for the user object
router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getReview);
router.post('/', reviewController.createReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
