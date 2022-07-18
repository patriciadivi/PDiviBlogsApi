const services = require('../services/index');

const postCategoriesController = async (req, res) => {
    const { name } = req.body;
    // console.log('name controllers', name);
    const resultPostCategoriesName = await services.postCategoriesService(name);
    console.log(resultPostCategoriesName, 'resultPostCategoriesName');
    return res.status(201).json(resultPostCategoriesName);
    // res.status(200).send('cheguei');
};

module.exports = postCategoriesController;