const service = require('../services/postLoginServices');

const postLoginController = async (req, res) => {
    const { email, password } = req.body;
    const tokenValidation = await service.postLoginService(email, password);
    return res.status(200).json({ tokenValidation });
    // res.status(200).json({ message: 'Login successful' });
};

module.exports = postLoginController;