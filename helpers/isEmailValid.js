const validator = require('email-validator');
const { Users } = require('../models');

module.exports = async (email) => {
  if (email === undefined) {
    return { status: 400, response: { message: '"email" is required' } };
  }
  if (!validator.validate(email)) {
    return { status: 400, response: { message: '"email" must be a valid email' } };
  }
  const findEmail = await Users.findOne({ where: { email } });
  if (findEmail !== null) {
    return { status: 409, response: { message: 'User already registered' } };
  }
  return true;
};
