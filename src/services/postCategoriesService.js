const { Category } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');

const postCategoriesService = async (nameParams) => {
    console.log('cheguei no service');
// console.log(nameParams, 'postCategoriesService');
    const verificationCategory = await Category.findOne({
        where: { 
            name: nameParams,
        },
    });
    
    console.log('verificationCategory', verificationCategory);
      if (verificationCategory) throw new MyError(400, 'Category already exists');
      const createdCategory = await Category.create({ name: nameParams });
      console.log(createdCategory, 'created category');
    const { id, name } = createdCategory.dataValues;
    return { id, name };
};

module.exports = postCategoriesService;