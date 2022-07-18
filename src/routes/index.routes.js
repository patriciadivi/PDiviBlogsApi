const express = require('express');

const login = require('./login.routes');
const user = require('./user.routes');

const Router = express.Router();

Router.use(login);
Router.use(user);

module.exports = { Router };
