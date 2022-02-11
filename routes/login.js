const route = require('express').Router();
const { LoginController } = require('../controller');

route.get('/', LoginController.login);
route.post('/', LoginController.login);

module.exports = route;
