require('dotenv').config();
const jwt = require('jsonwebtoken');
const isTokenIsValid = require('../helpers/isTokenIsValid');
const isValidBlogPostsEditValues = require('../helpers/isValidBlogPostsEditValues');
const isValidBlogPostsValues = require('../helpers/isValidBlogPostsValues');
const { BlogPosts, Users, PostsCategories, Categories } = require('../models');

const secret = process.env.JWT_SECRET;

const createBlogPosts = async (token, title, content, categoryIds) => {
  const validValues = await isValidBlogPostsValues(token, title, content, categoryIds);
  if (validValues !== true) return validValues;

  const decoded = jwt.verify(token, secret);
  const { id } = await Users.findOne({ where: { email: decoded.data } });

  const post = await BlogPosts.create({ title, content, userId: id });
  categoryIds.forEach(
    (category) => PostsCategories.create({ postId: post.dataValues.id, categoryId: category }),
    );
  return { status: 201, response: post };
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

const getBlogPostsById = async (token, id) => {
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

const updateBlogPostsById = async ({ token, id, title, content, categoryIds }) => {
  const validToken = await isTokenIsValid(token);
  const isValidValues = await isValidBlogPostsEditValues(title, content, categoryIds);
  if (validToken !== true) return validToken;
  if (isValidValues !== true) return isValidValues;

  const posts = await BlogPosts.findOne({ where: { id } });
  if (!posts) return { status: 404, response: { message: 'Post does not exist' } };
  const decoded = jwt.verify(token, secret);
  const userID = await Users.findOne({ where: { email: decoded.data } });

  if (posts.dataValues.id !== userID.dataValues.id) {
    return { status: 401, response: { message: 'Unauthorized user' } };
  }

  await BlogPosts.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPosts.findOne({ 
    where: { id },
    include: { model: Categories, as: 'categories', through: { attributes: [] } },
  });

  return { status: 200, response: updatedPost };
};

const deletePostById = async (token, id) => {
  const validToken = await isTokenIsValid(token);
  if (validToken !== true) return validToken;

  const posts = await BlogPosts.findOne({ where: { id } });
  if (!posts) return { status: 404, response: { message: 'Post does not exist' } };
  
  const decoded = jwt.verify(token, secret);
  const userID = await Users.findOne({ where: { email: decoded.data } });

  if (posts.dataValues.id !== userID.dataValues.id) {
    return { status: 401, response: { message: 'Unauthorized user' } };
  }

  await BlogPosts.destroy({ where: { id } });

  return { status: 204, response: '' };
};

module.exports = {
  createBlogPosts,
  getAllBlogPosts,
  getBlogPostsById,
  updateBlogPostsById,
  deletePostById,
};