const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MyError } = require('./errorCustomer');

const decryptTokenfunc = (paramsToken) => {
try {
  const token = jwt.verify(paramsToken, process.env.JWT_SECRET);
  // const { data } = token;
  if (!token) throw new MyError(401, 'invalid token');
  return token;
} catch (error) {
  console.error(error.message);
}
};

module.exports = { decryptTokenfunc };