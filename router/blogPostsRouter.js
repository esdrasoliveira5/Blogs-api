const express = require('express');
const rescue = require('express-rescue');

const BlogPosts = require('../controllers/BlogPosts');
const { ErrorHanldeBlogPosts } = require('../middlewares/ErrorHanldeBlogPosts');

const router = express.Router();

router.post('/', rescue(BlogPosts.createBlogPosts));
router.get('/', rescue(BlogPosts.getAllBlogPosts));
router.get('/search', rescue(BlogPosts.getBlogPostsBySearchTerm));
router.get('/:id', rescue(BlogPosts.getBlogPostsById));
router.put('/:id', rescue(BlogPosts.updateBlogPostsById));
router.delete('/:id', rescue(BlogPosts.deletePostById));

router.use(ErrorHanldeBlogPosts);

module.exports = router;
