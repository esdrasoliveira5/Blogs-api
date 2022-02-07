const express = require('express');

const Categories = require('../controllers/Categories');

const router = express.Router();

router.post('/', Categories.createCategories);
router.get('/', Categories.getAllCategories);

module.exports = router;
