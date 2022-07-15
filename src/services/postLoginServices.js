const User = require('../database/models');
const { Error } = require('../utils/errorCustomer');
const { tokenGenerate } = require('../utils/tokenGenerate');

const postLoginService = async (email, passoword) => {
    // console.log('email', email, 'passoword', passoword);
    const tableUser = await User.findOne({ where: { email } });
    if (!tableUser) throw new Error(400, 'Invalid faelds');

    const tokenPassword = await tableUser.passoword === passoword;
    if (!tokenPassword) throw new Error(400, 'Invalid passoword');

    const token = tokenGenerate({
        email,
        passoword,
    });

    return token;
};

module.exports = { postLoginService };