const express = require('express');

const router = express.Router();
const Users = require('../controllers/Users');

router.post('/', Users.createUser);

module.exports = router;
