const services = require('../services/index');

const getCategoriesController = async (_req, res) => {
    const resultGetCategoriesAll = await services.getCategoriesServiceAll();
  return res.status(200).json(resultGetCategoriesAll);
};

module.exports = getCategoriesController;
