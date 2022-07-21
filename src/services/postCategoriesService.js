const { Category } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');

const postCategoriesService = async (nameParams) => {
    const verificationCategory = await Category.findOne({
        where: { 
            name: nameParams,
        },
    });
    
      if (verificationCategory) throw new MyError(400, 'Category already exists');
      const createdCategory = await Category.create({ name: nameParams });
    const { id, name } = createdCategory.dataValues;
    return { id, name };
};

module.exports = postCategoriesService;