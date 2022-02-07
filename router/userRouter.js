const express = require('express');

const router = express.Router();
const Users = require('../controllers/Users');

router.post('/', Users.createUser);
router.get('/', Users.getAllUsers);
router.get('/:id', Users.getUserById);

module.exports = router;
