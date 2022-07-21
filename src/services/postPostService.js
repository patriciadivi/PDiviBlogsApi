// const sequelize = require('sequelize');
const { Category, BlogPost } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { decryptTokenfunc } = require('../utils/decryptToken');

const postPostService = async (titleParams, contentParams, categoryIdsParams, authorization) => {
    // console.log('authorization', authorization);
    const { count } = await Category.findAndCountAll({ 
        where: { id: categoryIdsParams },
    });

    if (categoryIdsParams.length !== count) throw new MyError(400, '"categoryIds" not found');

    const decryptToken = await decryptTokenfunc(authorization);
    const { id: idUserId } = decryptToken.data;
    console.log('result >>>>>>>>>>>>>>>', decryptToken.id);
    console.log('idUserId >>>>>>>>>>>>>>>', idUserId);
    
    // const resultCreatePost = sequelize.transaction(async (trans) => {
    //     const decryptToken = decryptTokenfunc(authorization);
    //     const { id } = decryptToken.data;
    //     console.log('decryptToken>>>>>>>>>>>>>>>> ', id);
    //     const createdPost = await BlogPost.create({
    //         title: titleParams,
    //         content: contentParams,
    //         userId: id,
    //     }, { transaction: trans });
        
    //     return createdPost;
    // });
    const createNewPost = await BlogPost.create({
        title: titleParams,
        content: contentParams,
        categoryIds: categoryIdsParams,
        userId: idUserId,
    });

    // console.log('createNewPost >>>>>>>', createNewPost);
    
        return createNewPost; 
};

module.exports = postPostService;