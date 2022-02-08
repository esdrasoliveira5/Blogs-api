const express = require('express');
const rescue = require('express-rescue');

const Categories = require('../controllers/Categories');
const { ErrorHanldeCategories } = require('../middlewares/ErrorHanldeCategories');

const router = express.Router();

router.post('/', rescue(Categories.createCategories));
router.get('/', rescue(Categories.getAllCategories));

router.use(ErrorHanldeCategories);

module.exports = router;
