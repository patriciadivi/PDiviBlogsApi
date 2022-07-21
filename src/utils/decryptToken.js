const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MyError } = require('./errorCustomer');

const decryptTokenfunc = (paramsToken) => {
 const token = jwt.verify(paramsToken, process.env.JWT_SECRET);
  if (!token) throw new MyError(401, 'invalid token');
  return token;
};

module.exports = { decryptTokenfunc };