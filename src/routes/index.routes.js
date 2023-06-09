const express = require('express');

const login = require('./login.routes');
const user = require('./user.routes');
const categories = require('./categories.routes');
const post = require('./post.routes');

const Router = express.Router();

Router.use(login);
Router.use(user);
Router.use(categories);
Router.use(post);

module.exports = { Router };
