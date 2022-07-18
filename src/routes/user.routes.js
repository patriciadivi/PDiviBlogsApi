const { Router } = require('express');
const controllers = require('../controllers/index');
const { validade } = require('../middlewares/zod/userValidation/userValidation');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const user = Router();

user.get('/user/:id', tokenValidation, controllers.getUserControllerID);
user.get('/user', tokenValidation, controllers.getUserControllerAll);
user.post('/user', validade, controllers.postUserController);

module.exports = user;