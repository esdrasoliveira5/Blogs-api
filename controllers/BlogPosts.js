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

module.exports = {
  createBlogPosts,
};