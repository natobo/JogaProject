const express = require('express');
const { lfgsMock } = require('../utils/mocks/mock-lfg');
/**
 * Router for the LFG class
 * @param {*} app principal App from express framework
 */
function lfgRouter(app) {
  const router = express.Router();
  // Defines the router and the direction of the path to be called
  app.use('/api/lfg', router);

  // CRUD for the user object
  router.get('/', async function (req, res, next) {
    try {
      const lfgs = await Promise.resolve(lfgsMock);
      // Defines the response of the server
      res.status(200).json({
        data: lfgs,
        message: 'lfgs listed',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.get('/:lfgId', async function (req, res, next) {
    try {
      // Search the lfg in the mock if dont exists retrieve data empty
      const lfg = await Promise.resolve(
        lfgsMock.find((mLfg) => mLfg.id === Number(req.params.lfgId))
      );
      res.status(200).json({
        data: lfg,
        message: 'LFG retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the created Object
      const createdLfgId = await Promise.resolve(lfgsMock[0].id);
      // Defines the response of the server
      res.status(201).json({
        data: createdLfgId,
        message: 'LFG created',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.put('/:lfgId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the updated Object
      const updatedLfgId = await Promise.resolve(lfgsMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: updatedLfgId,
        message: 'LFG updated',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.delete('/:lfgId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the deleted Object
      const deletedLfgId = await Promise.resolve(lfgsMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: deletedLfgId,
        message: 'LFG deleted',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });
}

module.exports = lfgRouter;
