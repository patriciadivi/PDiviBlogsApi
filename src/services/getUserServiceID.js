const { User } = require('../database/models');

const getUserServiceAll = async (id) => {
    const getUserIDModels = await User.findOne({ where: { id } });
      return getUserIDModels;
};

module.exports = getUserServiceAll;