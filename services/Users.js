require('dotenv').config();
const jwt = require('jsonwebtoken');
const isDisplayNameValid = require('../helpers/isDisplayNameValid');
const isEmailValidCreate = require('../helpers/isEmailValidCreate');
const isPasswordValid = require('../helpers/isPasswordValid');
const isEmailValidLogin = require('../helpers/isEmailValidlogin');

const { Users } = require('../models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const createUser = async (displayName, email, password, image) => {
  try {
    const nameValidation = isDisplayNameValid(displayName);
    const passwordValidation = isPasswordValid(password);
    const emailValidation = await isEmailValidCreate(email);
    
    if (nameValidation !== true) return nameValidation;
    if (emailValidation !== true) return emailValidation;
    if (passwordValidation !== true) return passwordValidation;

    await Users.create({ displayName, email, password, image });
   
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return { status: 201, response: { token } };
  } catch (error) {
    console.log(error.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const passwordValidation = isPasswordValid(password);
    const emailValidation = await isEmailValidLogin(email);
    
    if (emailValidation !== true) return emailValidation;
    if (passwordValidation !== true) return passwordValidation;
   
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return { status: 200, response: { token } };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
};