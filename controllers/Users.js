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

const getAllUsers = async (req, resp) => {
  const { authorization } = req.headers;

  const { status, response } = await Users.getAllUsers(authorization);

  return resp.status(status).json(response);
};

const getUserById = async (req, resp) => {
  const { authorization } = req.headers;
  const { id } = req.params;

  const { status, response } = await Users.getUserById(authorization, id);

  return resp.status(status).json(response);
};

const deleteUser = async (req, resp) => {
  const { authorization } = req.headers;

  const { status, response } = await Users.deleteUser(authorization);

  return resp.status(status).json(response);
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUser,
};