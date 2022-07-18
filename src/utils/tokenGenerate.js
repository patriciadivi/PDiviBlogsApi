const jwt = require('jsonwebtoken');

require('dotenv').config();

const tokenGenerate = (data) => {
 const { id, email, displayName, image } = data;
 const newUser = { id, email, displayName, image };
 const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, {
  expiresIn: '365d',
  algorithm: 'HS256',
 });
  return token;
};

// const tokenGenerate = (credentials) => new Promise((resolve, reject) => {
//     const token = jwt.sign(credentials, process.env.JWT_SECRET, {
//       expiresIn: '365d',
//     }, (error, key) => {
//       if (error) reject(error);
//       resolve(key);
//     });
//     return token;
//   });

module.exports = { tokenGenerate };
