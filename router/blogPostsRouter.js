const express = require('express');

const BlogPosts = require('../controllers/BlogPosts');

const router = express.Router();

router.post('/', BlogPosts.createBlogPosts);
router.get('/', BlogPosts.getAllblogPosts);
router.get('/:id', BlogPosts.geBlogPostsById);
module.exports = router;
