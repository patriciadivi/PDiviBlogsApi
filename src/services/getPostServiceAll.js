const { BlogPost, User, Category } = require('../database/models');

const getPostServiceAll = async () => {
    const getPostAllModels = await BlogPost.findAll({ 
        include: [ // Notice `include` takes an ARRAY
            { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
            { model: Category, as: 'categories', through: { attributes: [] } },
          ],
        });

        const categories = getPostAllModels[0];
        console.log('categories', categories);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

        // const { dataValues } = categories;
        // console.log(dataValues);
        return getPostAllModels;
    };
    
module.exports = getPostServiceAll;