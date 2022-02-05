const Users = require('../services/Users');

const createUser = async (req, resp) => {
  const { displayName, email, password, image } = req.body;

  const { status, response } = await Users.createUser(displayName, email, password, image);

  return resp.status(status).json(response);
};

const loginUser = async (req, resp) => {
  const { email, password } = req.body;

  const { status, response } = await Users.loginUser(email, password);

  return resp.status(status).json(response);
};

module.exports = {
  createUser,
  loginUser,
};