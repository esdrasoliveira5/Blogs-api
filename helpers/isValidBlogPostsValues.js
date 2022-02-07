const isCategoryIdValid = require('./isCategoryIdValid');
const isTokenIsValid = require('./isTokenIsValid');

module.exports = async (token, title, content, categoryIds) => {
  const validToken = await isTokenIsValid(token);
  const validCategoryId = await isCategoryIdValid(categoryIds);
  if (validToken !== true) return validToken;
  if (!title) return { status: 400, response: { message: '"title" is required' } };
  if (!content) return { status: 400, response: { message: '"content" is required' } };
  if (validCategoryId !== true) return validCategoryId;
  return true;
};