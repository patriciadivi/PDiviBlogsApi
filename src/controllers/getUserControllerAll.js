const services = require('../services/index');

const getUserControllerAll = async (_req, res) => {
    const resultGetUserAll = await services.getUserServiceAll();
  return res.status(200).json(resultGetUserAll);
};

module.exports = getUserControllerAll;