const { Router } = require('express');
const controllers = require('../controllers/index');
const validateCampPost = require('../middlewares/validateCampPost');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const post = Router();

// post.get('/post/:id', tokenValidation, controllers.getPostControllerID);
post.get('/post', tokenValidation, controllers.getPostControllerAll);
post.post('/post', tokenValidation, validateCampPost, controllers.postPostController);

module.exports = post;