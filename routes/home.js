const route = require('express').Router();
const { HomeContoller } = require('../controller');

route.get('/', HomeContoller.home);

module.exports = route;
