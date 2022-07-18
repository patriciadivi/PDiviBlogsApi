const services = require('../services/index');

const getUserControllerID = async (req, res) => {
    const { id } = req.params;
    const resultGetUserID = await services.getUserServiceID(id);
  return res.status(200).json(resultGetUserID);
};

module.exports = getUserControllerID;