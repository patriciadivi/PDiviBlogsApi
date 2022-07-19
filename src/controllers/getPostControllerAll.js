const services = require('../services/index');

const getPostControllerAll = async (_req, res) => {
    const resultGetPostAll = await services.getPostServiceAll();
  return res.status(200).json(resultGetPostAll);
};

module.exports = getPostControllerAll;