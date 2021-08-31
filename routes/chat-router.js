const express = require('express');
const { chatsMock } = require('../utils/mocks/mock-chat');
/**
 * Router for the Chat class
 * @param {*} app principal App from express framework
 */
function chatRouter(app) {
  const router = express.Router();
  // Defines the router and the direction of the path to be called
  app.use('/api/chat', router);

  // CRUD for the chat object
  router.get('/', async function (req, res, next) {
    try {
      const chats = await Promise.resolve(chatsMock);
      // Defines the response of the server
      res.status(200).json({
        data: chats,
        message: 'Chat listed',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.get('/:chatId', async function (req, res, next) {
    try {
      // Search the chat in the mock if dont exists retrieve data empty
      const chat = await Promise.resolve(
        chatsMock.find((mChat) => mChat.id === Number(req.params.chatId))
      );
      res.status(200).json({
        data: chat,
        message: 'Chat retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the created Object
      const createdChatId = await Promise.resolve(chatsMock[0].id);
      // Defines the response of the server
      res.status(201).json({
        data: createdChatId,
        message: 'Chat created',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.put('/:chatId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the updated Object
      const updatedChatId = await Promise.resolve(chatsMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: updatedChatId,
        message: 'Chat updated',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.delete('/:chatId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the deleted Object
      const deletedChatId = await Promise.resolve(chatsMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: deletedChatId,
        message: 'Chat deleted',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });
}

module.exports = chatRouter;
