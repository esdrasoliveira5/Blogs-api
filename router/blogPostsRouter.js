const express = require('express');

const BlogPosts = require('../controllers/BlogPosts');

const router = express.Router();

router.post('/', BlogPosts.createBlogPosts);
router.get('/', BlogPosts.getAllblogPosts);

module.exports = router;
