const services = require('../services/index');

const postPostController = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;

    const resultPostController = await 
    services.postPostService(title, content, categoryIds, authorization);
    return res.status(201).json(resultPostController);
};

module.exports = postPostController;