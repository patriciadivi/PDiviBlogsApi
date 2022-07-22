const { Category, BlogPost, PostCategory, sequelize } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { decryptTokenfunc } = require('../utils/decryptToken');

const postPostService = async (titleParams, contentParams, categoryIdsParams, authorization) => {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIdsParams } });
    if (categoryIdsParams.length !== count) throw new MyError(400, '"categoryIds" not found');
    
    const decryptToken = decryptTokenfunc(authorization);
    const idUserId = decryptToken.data.id;

    const resultCreatePost = sequelize.transaction(async (trans) => {
        const createdPost = await BlogPost.create({
            title: titleParams,
            content: contentParams,
            userId: idUserId,
        }, { transaction: trans });
    
        const resultCreatePostId = createdPost.dataValues.id;

    const modified = categoryIdsParams
        .map((elem) => ({ postId: resultCreatePostId, categoryId: elem }));
    await PostCategory.bulkCreate(modified, { transaction: trans });
        return createdPost;
    });
        
        return resultCreatePost; 
};

module.exports = postPostService;