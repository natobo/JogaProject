const express = require('express');
const { usersMock } = require('../utils/mocks/mock-user');
/**
 * Router for the User class
 * @param {*} app principal App from express framework
 */
const router = express.Router();

// CRUD for the user object
router.get('/', async function (req, res, next) {
  try {
    const users = await Promise.resolve(usersMock);
    // Defines the response of the server
    res.status(200).json({
      data: users,
      message: 'Users listed',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.get('/:userId', async function (req, res, next) {
  try {
    // Search the user in the mock if dont exists retrieve data empty
    const user = await Promise.resolve(
      usersMock.find((mUser) => mUser.id === Number(req.params.userId))
    );
    res.status(200).json({
      data: user,
      message: 'User retrieved',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the created Object
    const createdUserId = await Promise.resolve(usersMock[0].id);
    // Defines the response of the server
    res.status(201).json({
      data: createdUserId,
      message: 'User created',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.put('/:userId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the updated Object
    const updatedUserId = await Promise.resolve(usersMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: updatedUserId,
      message: 'User updated',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.delete('/:userId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the deleted Object
    const deletedUserId = await Promise.resolve(usersMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: deletedUserId,
      message: 'User deleted',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

module.exports = router;
