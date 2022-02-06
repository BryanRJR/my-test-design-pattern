const route = require('express').Router();
const hpRouter = require('./hpRouter');
const homeRouter = require('./home');
const aboutRouter = require('./about');

route.use('/hp', hpRouter);
route.use('/about', aboutRouter);
route.use('/', homeRouter);

module.exports = route;
