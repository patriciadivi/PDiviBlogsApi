const services = require('../services/index');

const getUserControllerID = async (_req, res) => {
    const resultGetUserID = await services.getUserServiceID();
  return res.status(200).json(resultGetUserID);
};

module.exports = getUserControllerID;