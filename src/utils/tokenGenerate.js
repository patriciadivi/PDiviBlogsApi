const jwt = require('jsonwebtoken');

require('dotenv').config();

const tokenGenerate = (credentials) => new Promise((resolve, reject) => {
    const token = jwt.sign(credentials, process.env.JWT_SECRET, {
      expiresIn: '365d',
    }, (error, key) => {
      if (error) reject(error);
      resolve(key);
    });
    return token;
  });

module.exports = { tokenGenerate };
