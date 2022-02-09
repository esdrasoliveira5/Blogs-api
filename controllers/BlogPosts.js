const BlogPosts = require('../services/BlogPosts');

const createBlogPosts = async (req, resp) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;

  const { status, response } = await BlogPosts.createBlogPosts(
    authorization, 
    title, 
    content, 
    categoryIds,
    );

    return resp.status(status).json(response);
};

const getAllBlogPosts = async (req, resp) => {
  const { authorization } = req.headers;

  const { status, response } = await BlogPosts.getAllBlogPosts(authorization);

  return resp.status(status).json(response);
};

const getBlogPostsById = async (req, resp) => {
  const { authorization } = req.headers;
  const { id } = req.params;

  const { status, response } = await BlogPosts.getBlogPostsById(authorization, id);

  return resp.status(status).json(response);
};

const updateBlogPostsById = async (req, resp) => {
  const { authorization: token } = req.headers;
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;

  const values = {
    token, 
    id, 
    title, 
    content, 
    categoryIds,
  };

  const { status, response } = await BlogPosts.updateBlogPostsById(values);

  return resp.status(status).json(response);
};

const deletePostById = async (req, resp) => {
  const { authorization } = req.headers;
  const { id } = req.params;

  const { status, response } = await BlogPosts.deletePostById(authorization, id);

  return resp.status(status).json(response);
};

const getBlogPostsBySearchTerm = async (req, resp) => {
  const { authorization } = req.headers;
  const { q } = req.query;

  const { status, response } = await BlogPosts.getBlogPostsBySearchTerm(authorization, q);

  return resp.status(status).json(response);
};

module.exports = {
  createBlogPosts,
  getAllBlogPosts,
  getBlogPostsById,
  updateBlogPostsById,
  deletePostById,
  getBlogPostsBySearchTerm,
};