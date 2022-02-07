const categories = require('../services/Categories');

const createCategories = async (req, resp) => {
  const { authorization } = req.headers;
  const { name } = req.body;

  const { status, response } = await categories.createCategories(authorization, name);

  return resp.status(status).json(response);
};

const getAllCategories = async (req, resp) => {
  const { authorization } = req.headers;

  const { status, response } = await categories.getAllCategories(authorization);

  return resp.status(status).json(response);
};

module.exports = {
  createCategories,
  getAllCategories,
};