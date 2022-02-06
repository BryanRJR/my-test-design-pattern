const route = require('express').Router();
const { HpController } = require('../controller');

route.get('/', HpController.getPhone);
route.get('/:id', HpController.getOnePhone);
route.post('/', HpController.addData);

module.exports = route;
