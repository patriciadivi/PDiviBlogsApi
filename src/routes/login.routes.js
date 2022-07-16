const { Router } = require('express');
const controllers = require('../controllers/index');
const userValidation = require('../middlewares/requestLogin');

const login = Router();

login.post('/login', userValidation, controllers.postLoginController);

module.exports = login;