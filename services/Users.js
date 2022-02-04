require('dotenv').config();
const jwt = require('jsonwebtoken');
const isDisplayNameValid = require('../helpers/isDisplayNameValid');
const isEmailValid = require('../helpers/isEmailValid');
const isPasswordValid = require('../helpers/isPasswordValid');

const { Users } = require('../models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const createUser = async (displayName, email, password, image) => {
  try {
    const nameValidation = isDisplayNameValid(displayName);
    const passwordValidation = isPasswordValid(password);
    const emailValidation = await isEmailValid(email);
    
    if (nameValidation !== true) return nameValidation;
    if (emailValidation !== true) return emailValidation;
    if (passwordValidation !== true) return passwordValidation;

    await Users.create({ displayName, email, password, image });
   
    const token = jwt.sign({ data: displayName }, secret, jwtConfig);
    return { status: 201, response: { token } };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createUser,
};