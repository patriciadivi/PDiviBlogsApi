const services = require('../services/index');

const postPostController = async (req, res) => {
    const { body: data } = req;
    const resultPostController = await services.postPostService(data);
    // console.log(tokenValidation, 'tokenValidation');
    return res.status(201).json(resultPostController);
};

module.exports = postPostController;