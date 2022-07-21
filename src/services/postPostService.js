const { Category, BlogPost } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { decryptTokenfunc } = require('../utils/decryptToken');

const postPostService = async (titleParams, contentParams, categoryIdsParams, authorization) => {
    const { count } = await Category.findAndCountAll({ 
        where: { id: categoryIdsParams },
    });

    if (categoryIdsParams.length !== count) throw new MyError(400, '"categoryIds" not found');
    
    const decryptToken = decryptTokenfunc(authorization);
    // console.log('decryptToken', decryptToken);
    // const idUserId = decryptToken.data.id;
    // console.log('idUserId>>>>>>>>', !idUserId);
    // if (!idUserId) throw new MyError(400, '"idUserId" not found');
    // const verificationUser = await User.findOne({ where: { id: idUserId } });
    // const resultUser = verificationUser.dataValues;
    // const { id: userIdGet } = resultUser;

    // const resultCreatePost = sequelize.transaction(async (trans) => {
    //     const createdPost = await BlogPost.create({
    //         title: titleParams,
    //         content: contentParams,
    //         userId: idUserId,
    //     }, { transaction: trans });
        
    //     return createdPost;
    // });
    const createNewPost = await BlogPost.create({
            title: titleParams,
            content: contentParams,
            userId: decryptToken.id,
        });
        
        return createNewPost; 
};

module.exports = postPostService;