const { userSchema } = require('./userSchema');
const { MyError } = require('../../../utils/errorCustomer');

class UserValidation {
    constructor(schema) {
        this.schema = schema;
    }

    validade(req, _res, next) {
        const user = req.body;
        const result = this.schema.safeParse(user);
        if (result.success) return next();
        const { issues: [{ message }] } = result.error;
        throw new MyError(401, message);
    }
}

const userValidation = new UserValidation(userSchema);

module.exports = { userValidation };