const { Router } = require('express');
const controllers = require('../controllers/index');
const nameValidation = require('../middlewares/zod/nameValidation');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const categories = Router();

categories.get('/categories',
tokenValidation, controllers.getCategoriesController);
categories.post('/categories', nameValidation,
tokenValidation, controllers.postCategoriesController);

module.exports = categories;