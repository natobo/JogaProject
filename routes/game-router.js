const express = require('express');
const { gamesMock } = require('../utils/mocks/mock-game');
/**
 * Router for the User class
 * @param {*} app principal App from express framework
 */
function gameRouter(app) {
  const router = express.Router();
  // Defines the router and the direction of the path to be called
  app.use('/api/game', router);

  // CRUD for the user object
  router.get('/', async function (req, res, next) {
    try {
      const games = await Promise.resolve(gamesMock);
      // Defines the response of the server
      res.status(200).json({
        data: games,
        message: 'Games listed',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.get('/:gameId', async function (req, res, next) {
    try {
      // Search the user in the mock if dont exists retrieve data empty
      const game = await Promise.resolve(
        gamesMock.find((mGame) => mGame.id === Number(req.params.gameId))
      );
      res.status(200).json({
        data: game,
        message: 'Game retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the created Object
      const createdGameId = await Promise.resolve(gamesMock[0].id);
      // Defines the response of the server
      res.status(201).json({
        data: createdGameId,
        message: 'Game created',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.put('/:gameId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the updated Object
      const updatedGameId = await Promise.resolve(gamesMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: updatedGameId,
        message: 'Game updated',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.delete('/:gameId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the deleted Object
      const deletedGameId = await Promise.resolve(gamesMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: deletedGameId,
        message: 'Game deleted',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });
}

module.exports = gameRouter;
