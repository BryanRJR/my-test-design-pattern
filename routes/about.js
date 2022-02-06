const route = require('express').Router();
const { AboutController } = require('../controller');

route.get('/', AboutController.about);
// route.get('/location', AboutController.Location);

module.exports = route;
