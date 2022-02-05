module.exports = (password) => {
  console.log(password);
  if (password === undefined) {
    return { status: 400, response: { message: '"password" is required' } };
  }
  if (password.length === 0) {
    return { status: 400, response: { message: '"password" is not allowed to be empty' } };
  }
  if (password.length !== 6) {
    return { status: 400, response: { message: '"password" length must be 6 characters long' } };
  }
  return true;
};
