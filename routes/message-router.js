const express = require('express');
const { messageMock } = require('../utils/mocks/mock-message');
/**
 * Router for the Message class
 */
const router = express.Router();

// CRUD for the message object
router.get('/', async function (req, res, next) {
  try {
    const messages = await Promise.resolve(messageMock);
    // Defines the response of the server
    res.status(200).json({
      data: messages,
      message: 'Message listed',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.get('/:messageId', async function (req, res, next) {
  try {
    // Search the message in the mock if dont exists retrieve data empty
    const message = await Promise.resolve(
      messageMock.find(
        (mMessage) => mMessage.id === Number(req.params.messageId)
      )
    );
    res.status(200).json({
      data: message,
      message: 'Message retrieved',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the created Object
    const createdMessageId = await Promise.resolve(messageMock[0].id);
    // Defines the response of the server
    res.status(201).json({
      data: createdMessageId,
      message: 'Message created',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.put('/:messageId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the updated Object
    const updatedMessageId = await Promise.resolve(messageMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: updatedMessageId,
      message: 'Message updated',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

router.delete('/:messageId', async function (req, res, next) {
  try {
    // Returns the id of the first One of the mock, later it will be the id of the deleted Object
    const deletedMessageId = await Promise.resolve(messageMock[0].id);
    // Defines the response of the server
    res.status(200).json({
      data: deletedMessageId,
      message: 'Message deleted',
    });
  } catch (error) {
    // next is catching the error from a callback function
    next(error);
  }
});

module.exports = router;
