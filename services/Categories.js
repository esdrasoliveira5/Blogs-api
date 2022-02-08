const isTokenIsValid = require('../helpers/isTokenIsValid');
const { Categories } = require('../models');

const createCategories = async (token, name) => {
  const validToken = await isTokenIsValid(token);

  if (!name) return { status: 400, response: { message: '"name" is required' } };
  if (validToken !== true) return validToken;

  const category = await Categories.create({ name });
  return { status: 201, response: category };
};

const getAllCategories = async (token) => {
  const validToken = await isTokenIsValid(token);
  if (validToken !== true) return validToken;
  const allCategories = await Categories.findAll();
  return { status: 200, response: allCategories };
};

module.exports = {
  createCategories,
  getAllCategories,
};