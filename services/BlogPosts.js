require('dotenv').config();
const jwt = require('jsonwebtoken');
const isValidBlogPostsValues = require('../helpers/isValidBlogPostsValues');
const { BlogPosts, Users } = require('../models');

const secret = process.env.JWT_SECRET;

const createBlogPosts = async (token, title, content, categoryIds) => {
  const validValues = await isValidBlogPostsValues(token, title, content, categoryIds);
  if (validValues !== true) return validValues;
  try {
    const decoded = jwt.verify(token, secret);
    const { id } = await Users.findOne({ where: { email: decoded.data } });

    const post = await BlogPosts.create({ title, content, userId: id });
    return { status: 201, response: post };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlogPosts,
};