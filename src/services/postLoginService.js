const { User } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { tokenGenerate } = require('../utils/tokenGenerate');

const postLoginService = async (email, password) => {
    const tableUser = await User.findOne({ where: { email } });
    if (!tableUser) throw new MyError(400, 'Invalid fields');

    const tokenPassword = tableUser.password === password;
    if (!tokenPassword) throw new MyError(400, 'Invalid passoword');

    const token = tokenGenerate({
        email,
    });

    return token;
};

module.exports = postLoginService;