const { Router } = require('express');
const controllers = require('../controllers/index');
// const { validade } = require('../middlewares/zod/userValidation/userValidation');
const { tokenValidation } = require('../middlewares/tokenGlobal');

const post = Router();

// post.get('/post/:id', tokenValidation, controllers.getPostControllerID);
post.get('/post', tokenValidation, controllers.getPostControllerAll);
post.post('/post', tokenValidation, controllers.postPostController);

module.exports = post;