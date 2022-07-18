const { MyError } = require('../utils/errorCustomer');
const { validateToken } = require('../utils/validateToken');

const tokenValidation = async (req, _res, next) => {
    const { authorization } = req.headers;
    console.log('authorization', authorization);
    if (!authorization) throw new MyError(401, 'Token not found');

    const ifTokenValidated = await validateToken(authorization);
    console.log('ifTokenValidated', ifTokenValidated);

    if (!ifTokenValidated) throw new MyError(401, 'Expired or invalid token');
    return next();
};

module.exports = { tokenValidation };