const { Router } = require('express');
const controllers = require('../controllers/index');
const { validade } = require('../middlewares/zod/userValidation/userValidation');

const user = Router();

user.post('/user', validade, controllers.postUserController);

module.exports = user;