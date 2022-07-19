const { Category } = require('../database/models');

const getCategoriesServiceAll = async () => {
    const getCategoriesAllModels = await Category.findAll({
        attributes: ['id', 'name'],
      });
      return getCategoriesAllModels;
};

module.exports = getCategoriesServiceAll;