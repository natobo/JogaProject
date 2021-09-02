const express = require('express');
const { rankingsMock } = require('../utils/mocks/mock-ranking');
/**
 * Router for the ranking class
 */
const router = express.Router();

// CRUD for the user object
router.get('/', async function (req, res, next) {
  try {
    const rankings = await Promise.resolve(rankingsMock);
    // Defines the response of the server
    res.status(200).json({
      data: rankings, // TODO: check
      message: 'rankings listed',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.get('/:rankingId', async function (req, res, next) {
  try {
    // Search the ranking in the mock if dont exists retrieve data empty
    const ranking = await Promise.resolve(
      rankingsMock.find(
        (mRanking) => mRanking.id === Number(req.params.rankingId)
      )
    );
    res.status(200).json({
      data: ranking,
      message: 'Ranking retrieved',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the created Object
    const createdRankingId = await Promise.resolve(rankingsMock[0].id);
    // Defines the response of the server
    res.status(201).json({
      data: createdRankingId,
      message: 'Ranking created',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.put('/:rankingId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the updated Object
    const updatedRankingId = await Promise.resolve(rankingsMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: updatedRankingId,
      message: 'Ranking updated',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.delete('/:rankingId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the deleted Object
    const deletedRankingId = await Promise.resolve(rankingsMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: deletedRankingId,
      message: 'Ranking deleted',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

module.exports = router;
