const services = require('../services/index');

const postLoginController = async (req, res) => {
    const { email, password } = req.body;
    const tokenValidation = await services.postLoginService(email, password);
    return res.status(200).json({ token: tokenValidation });
};

module.exports = postLoginController;