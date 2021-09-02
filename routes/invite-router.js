const express = require('express');
const { invitesMock } = require('../utils/mocks/mock-invite');
/**
 * Router for the Invite class
 */

const router = express.Router();

// CRUD for the user object
router.get('/', async function (req, res, next) {
  try {
    const invites = await Promise.resolve(invitesMock);
    // Defines the response of the server
    res.status(200).json({
      data: invites,
      message: 'Invites listed',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.get('/:inviteId', async function (req, res, next) {
  try {
    // Search the user in the mock if dont exists retrieve data empty
    const invite = await Promise.resolve(
      invitesMock.find((mInvite) => mInvite.id === Number(req.params.inviteId))
    );
    res.status(200).json({
      data: invite,
      message: 'Review retrieved',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the created Object
    const createdInviteId = await Promise.resolve(invitesMock[0].id);
    // Defines the response of the server
    res.status(201).json({
      data: createdInviteId,
      message: 'Invite created',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.put('/:inviteId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the updated Object
    const updatedInviteId = await Promise.resolve(invitesMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: updatedInviteId,
      message: 'Invite updated',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.delete('/:inviteId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the deleted Object
    const deletedInviteId = await Promise.resolve(invitesMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: deletedInviteId,
      message: 'Invite deleted',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

module.exports = router;
