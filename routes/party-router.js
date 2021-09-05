const express = require('express');
const { partiesMock } = require('../utils/mocks/mock-party');
/**
 * Router for the User class
 */
const router = express.Router();

// CRUD for the user object
router.get('/', async function (req, res, next) {
  try {
    const parties = await Promise.resolve(partiesMock);
    // Defines the response of the server
    res.status(200).json({
      data: parties,
      message: 'Parties listed',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.get('/:partyId', async function (req, res, next) {
  try {
    // Search the user in the mock if dont exists retrieve data empty
    const party = await Promise.resolve(
      partiesMock.find((mParty) => mParty.id === Number(req.params.partyId))
    );
    res.status(200).json({
      data: party,
      message: 'Party retrieved',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the created Object
    const createdPartyId = await Promise.resolve(partiesMock[0].id);
    // Defines the response of the server
    res.status(201).json({
      data: createdPartyId,
      message: 'Party created',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.put('/:partyId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the updated Object
    const updatedPartyId = await Promise.resolve(partiesMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: updatedPartyId,
      message: 'Party updated',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.delete('/:partyId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the deleted Object
    const deletedPartyId = await Promise.resolve(partiesMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: deletedPartyId,
      message: 'Party deleted',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

module.exports = router;
