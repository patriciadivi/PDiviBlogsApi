const services = require('../services/index');

const postUserController = async (req, res) => {
    const { body: data } = req;
    const tokenValidation = await services.postUserService(data);
    console.log(tokenValidation, 'tokenValidation');
    return res.status(201).json({ token: tokenValidation });
};

module.exports = postUserController;