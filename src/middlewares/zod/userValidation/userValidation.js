const { userSchema } = require('./userSchema');
const { MyError } = require('../../../utils/errorCustomer');

const validade = (req, _res, next) => {
    const user = req.body;
    const result = userSchema.safeParse(user);
    if (result.success) return next();
    const { issues: [{ message }] } = result.error;
    throw new MyError(400, message);
};

module.exports = { validade };