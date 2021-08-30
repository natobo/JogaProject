const express = require('express');
const { dashboardsMock } = require('../utils/mocks/mock-dashboard');
/**
 * Router for the Dashboard class
 * @param {*} app principal App from express framework
 */
function dashboardRouter(app) {
  const router = express.Router();
  // Defines the router and the direction of the path to be called
  app.use('/api/dashboard', router);

  // CRUD for the user object
  router.get('/', async function (req, res, next) {
    try {
      const dashboards = await Promise.resolve(dashboardsMock);
      // Defines the response of the server
      res.status(200).json({
        data: dashboards,
        message: 'Dashboards listed',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.get('/:dashboardId', async function (req, res, next) {
    try {
      // Search the user in the mock if dont exists retrieve data empty
      const dashboard = await Promise.resolve(
        dashboardsMock.find(
          (mUser) => mUser.id === Number(req.params.dashboardId)
        )
      );
      res.status(200).json({
        data: dashboard,
        message: 'Dashboard retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the created Object
      const createdDashboardId = await Promise.resolve(dashboardsMock[0].id);
      // Defines the response of the server
      res.status(201).json({
        data: createdDashboardId,
        message: 'Dashboard created',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.put('/:dashboardId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the updated Object
      const updatedDashboardId = await Promise.resolve(dashboardsMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: updatedDashboardId,
        message: 'Dashboard updated',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });

  router.delete('/:dashboardId', async function (req, res, next) {
    try {
      // Returns the id of the first One of the mock, later it will be the id of the deleted Object
      const deletedDashboardId = await Promise.resolve(dashboardsMock[0].id);
      // Defines the response of the server
      res.status(200).json({
        data: deletedDashboardId,
        message: 'Dashboard deleted',
      });
    } catch (error) {
      // next is catching the error from a callback function
      next(error);
    }
  });
}

module.exports = dashboardRouter;
