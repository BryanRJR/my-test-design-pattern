const route = require('express').Router();
const { HomeController } = require('../controller');

route.get('/', HomeController.home);

module.exports = route;
