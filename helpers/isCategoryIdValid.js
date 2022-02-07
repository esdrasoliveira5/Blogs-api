const { Categories } = require('../models'); 

module.exports = async (categoryIds) => {
  const allCategories = await Categories.findAll();

  if (!categoryIds) return { status: 400, response: { message: '"categoryIds" is required' } };
  
  const categoryExists = categoryIds.every(
    (id) => allCategories.some((category) => id === category.id),
    );
  if (!categoryExists) return { status: 400, response: { message: '"categoryIds" not found' } };
  
  return true;
};
