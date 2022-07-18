const { User } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');

const getUserServiceID = async (id) => {
    const getUserIDModels = await User.findOne({ where: { id },
        attributes: ['id', 'displayName', 'email', 'image'],
    });
    if (!getUserIDModels) throw new MyError(404, 'User does not exist');
      return getUserIDModels;
};

module.exports = getUserServiceID;