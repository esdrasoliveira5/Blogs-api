require('dotenv').config();
const jwt = require('jsonwebtoken');
const isTokenIsValid = require('../helpers/isTokenIsValid');
const isValidBlogPostsValues = require('../helpers/isValidBlogPostsValues');
const { BlogPosts, Users, PostsCategories, Categories } = require('../models');

const secret = process.env.JWT_SECRET;

const createBlogPosts = async (token, title, content, categoryIds) => {
  const validValues = await isValidBlogPostsValues(token, title, content, categoryIds);
  if (validValues !== true) return validValues;
  try {
    const decoded = jwt.verify(token, secret);
    const { id } = await Users.findOne({ where: { email: decoded.data } });

    const post = await BlogPosts.create({ title, content, userId: id });
    categoryIds.forEach(
      (category) => PostsCategories.create({ postId: post.dataValues.id, categoryId: category }),
      );
    return { status: 201, response: post };
  } catch (error) {
    console.log(error.message);
  }
};

const getAllBlogPosts = async (token) => {
  const validToken = await isTokenIsValid(token);

  if (validToken !== true) return validToken;

  const allPosts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, response: allPosts };
};

const geBlogPostsById = async (token, id) => {
  const validToken = await isTokenIsValid(token);

  if (validToken !== true) return validToken;

  const posts = await BlogPosts.findOne({
    where: { id },
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!posts) return { status: 404, response: { message: 'Post does not exist' } };

  return { status: 200, response: posts };
};

module.exports = {
  createBlogPosts,
  getAllBlogPosts,
  geBlogPostsById,
};