const express = require('express');

const login = require('./login.routes');

const Router = express.Router();

Router.use(login);

module.exports = { Router };
