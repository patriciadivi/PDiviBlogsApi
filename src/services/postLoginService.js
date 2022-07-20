const { User } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { tokenGenerate } = require('../utils/tokenGenerate');

const postLoginService = async (email, password) => {
    // console.log(login);
    const tableUser = await User.findOne({ where: { email } });
    // console.log('tableUser', tableUser);
    if (!tableUser) throw new MyError(400, 'Invalid fields');

    const tokenPassword = tableUser.password === password;
    if (!tokenPassword) throw new MyError(400, 'Invalid passoword');

    const token = tokenGenerate({
        email,
    });
    console.log(token);

    return token;
};

module.exports = postLoginService;