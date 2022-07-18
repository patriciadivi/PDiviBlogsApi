const { User } = require('../database/models');
const { MyError } = require('../utils/errorCustomer');
const { tokenGenerate } = require('../utils/tokenGenerate');

const postUserService = async (data) => {
    const verificationUser = await User.findOne({ where: { email: data.email } });
    
      if (verificationUser) throw new MyError(409, 'User already registered');

      const createdUser = await User.create(data);
    
        const token = await tokenGenerate(createdUser);
        return token; 
};

module.exports = postUserService;