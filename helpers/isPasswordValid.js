module.exports = (password) => {
  if (!password) {
    return {
      status: 400,
      response: {
        message: '"password" is required',
      },
    };
  }

  if (password.length !== 6) {
    return { 
      status: 400, 
      response: { 
        message: '"password" length must be 6 characters long',
      },
    };
  }

  return true;
};
