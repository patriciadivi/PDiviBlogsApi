const { Router } = require('express');
const postLoginControllers = require('../controllers/postLoginControllers');
// const userValidation = require('../middlewares/requestLogin');

const login = Router();

login.post('/login', postLoginControllers);

module.exports = login;