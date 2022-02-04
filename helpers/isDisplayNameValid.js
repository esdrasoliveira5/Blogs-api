module.exports = (name) => {
  if (name === undefined) {
    return {
      status: 400,
      response: {
        message: '"displayName" is required',
      },
    };
  }

  if (name.length < 8) {
    return { 
      status: 400, 
      response: { 
        message: '"displayName" length must be at least 8 characters long',
      },
    };
  }

  return true;
};
