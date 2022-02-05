const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (token) => {
  if (token === undefined) return { status: 401, response: { message: 'Token not found' } };
  
  const decoded = jwt.verify(token, secret);

  const user = await Users.findOne({ where: { email: decoded.data } });
  console.log(user);
  if (!user) return { status: 401, response: { message: 'Expired or invalid token' } };
  
  return true;
};