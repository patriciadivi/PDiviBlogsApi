const services = require('../services/index');

const postCategoriesController = async (req, res) => {
    const { name } = req.body;
    const resultPostCategoriesName = await services.postCategoriesService(name);
    return res.status(201).json(resultPostCategoriesName);
};

module.exports = postCategoriesController;