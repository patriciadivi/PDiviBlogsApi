const jwt = require('jsonwebtoken');
require('dotenv').config();
// const { MyError } = require('./errorCustomer');

const decryptTokenfunc = (paramsToken) => {
    console.log('>>>>>>>>>>>>>>>>>>', paramsToken);
 const token = jwt.verify(paramsToken, process.env.JWT_SECRET);
  return token;
};

module.exports = { decryptTokenfunc };