const { User } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { tokenGenerate } = require('../utils/tokenGenerate');

const postLoginService = async (emailParams, password) => {
    const tableUser = await User.findOne({ where: { email: emailParams } });
    if (!tableUser) throw new MyError(400, 'Invalid fields');
    const { id, displayName, email, image } = tableUser.dataValues;

    const tokenPassword = tableUser.password === password;
    if (!tokenPassword) throw new MyError(400, 'Invalid passoword');

    const token = tokenGenerate({
        id,
        displayName,
        email,
        image,
    });

    return token;
};

module.exports = postLoginService;