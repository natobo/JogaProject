const express = require('express');
const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');
/**
 * Router for the Dashboard class
 */
const router = express.Router();
// Check that the user is logged
router.use(authController.protect);

// CRUD for the user object
router.get('/', dashboardController.getAllDashboards);
router.get('/:id', dashboardController.getDashboard);
router.post('/', dashboardController.createDashboard);
router.put('/:id', dashboardController.updateDashboard);
router.delete('/:id', dashboardController.deleteDashboard);

module.exports = router;
