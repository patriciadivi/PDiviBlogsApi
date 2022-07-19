const { BlogPost } = require('../database/models');

const getPostServiceAll = async () => {
    const getPostAllModels = await BlogPost.findAll({
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated', 'userId'],
      });
      return getPostAllModels;
};

module.exports = getPostServiceAll;