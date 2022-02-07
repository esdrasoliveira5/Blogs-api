const categories = require('../services/categories');

const createCategories = async (req, resp) => {
  const { authorization } = req.headers;
  const { name } = req.body;

  const { status, response } = await categories.createCategories(authorization, name);

  return resp.status(status).json(response);
};

module.exports = {
  createCategories,
};