const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (token) => {
  if (token === undefined) return { status: 401, response: { message: 'Token not found' } };
  try {
    const decoded = jwt.verify(token, secret);

    const user = await Users.findOne({ where: { email: decoded.data } });
  
    if (!user) return { status: 401, response: { message: 'Expired or invalid token' } };
  } catch (error) {
    console.log(error.message);
    return { status: 401, response: { message: 'Expired or invalid token' } };
  }
  return true;
};