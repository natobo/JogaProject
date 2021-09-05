const express = require('express');
const { reviewsMock } = require('../utils/mocks/mock-review');
/**
 * Router for the Review class
 */
const router = express.Router();

// CRUD for the user object
router.get('/', async function (req, res, next) {
  try {
    const reviews = await Promise.resolve(reviewsMock);
    // Defines the response of the server
    res.status(200).json({
      data: reviews,
      message: 'Reviews listed',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.get('/:reviewId', async function (req, res, next) {
  try {
    // Search the user in the mock if dont exists retrieve data empty
    const review = await Promise.resolve(
      reviewsMock.find((mReview) => mReview.id === Number(req.params.reviewId))
    );
    res.status(200).json({
      data: review,
      message: 'Review retrieved',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the created Object
    const createdReviewrId = await Promise.resolve(reviewsMock[0].id);
    // Defines the response of the server
    res.status(201).json({
      data: createdReviewrId,
      message: 'Review created',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.put('/:reviewId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the updated Object
    const updatedReviewId = await Promise.resolve(reviewsMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: updatedReviewId,
      message: 'Review updated',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.delete('/:reviewId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the deleted Object
    const deletedReviewId = await Promise.resolve(reviewsMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: deletedReviewId,
      message: 'Review deleted',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

module.exports = router;
