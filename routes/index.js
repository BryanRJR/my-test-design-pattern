const route = require('express').Router();
const hpRouter = require('./hpRouter');
const homeRouter = require('./home');
const aboutRouter = require('./about');
const loginRouter = require('./login');

route.use('/hp', hpRouter);
route.use('/about', aboutRouter);
route.use('/', homeRouter);
route.use('/login', loginRouter);

module.exports = route;
