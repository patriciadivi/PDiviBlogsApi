const { Router } = require('express');
const controllers = require('../controllers/index');
const userValidation = require('../middlewares/requestLogin');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const categories = Router();

categories.post('/categories',
 userValidation, tokenValidation, controllers.postCategoriesController);

module.exports = categories;