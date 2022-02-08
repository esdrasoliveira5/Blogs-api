const express = require('express');

const rescue = require('express-rescue');

const router = express.Router();
const Users = require('../controllers/Users');
const { ErrorHanldeUsers } = require('../middlewares/ErrorHanldeUsers');

router.post('/', rescue(Users.createUser));
router.get('/', rescue(Users.getAllUsers));
router.get('/:id', rescue(Users.getUserById));

router.use(ErrorHanldeUsers);
module.exports = router;
