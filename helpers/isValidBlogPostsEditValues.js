module.exports = async (title, content, categoryIds) => {
  if (!title) return { status: 400, response: { message: '"title" is required' } };
  if (!content) return { status: 400, response: { message: '"content" is required' } };
  if (categoryIds) return { status: 400, response: { message: 'Categories cannot be edited' } };

  return true;
};