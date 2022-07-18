// const { MyError } = require('../utils/errorCustomer');
const { User } = require('../database/models');

const getUserServiceAll = async () => {
    const getUserAllModels = await User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
      });
      return getUserAllModels;
};

module.exports = getUserServiceAll;