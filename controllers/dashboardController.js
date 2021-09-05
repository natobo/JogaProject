const Dashboard = require('../models/dashboardModel');
const factory = require('./handlerFactory');

exports.getDashboard = factory.getOne(Dashboard);
exports.getAllDashboards = factory.getAll(Dashboard);
exports.createDashboard = factory.createOne(Dashboard);
exports.updateDashboard = factory.updateOne(Dashboard);
exports.deleteDashboard = factory.deleteOne(Dashboard);
