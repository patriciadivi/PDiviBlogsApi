const { BlogPost, User, Category } = require('../database/models');

const getPostServiceAll = async () => {
    const getPostAllModels = await BlogPost.findAll({ 
        include: [ // Notice `include` takes an ARRAY
            { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
            { model: Category, as: 'categories', through: { attributes: [] } },
          ],
        });

        return getPostAllModels;
    };
    
module.exports = getPostServiceAll;