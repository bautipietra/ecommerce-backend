const jwt = require('jsonwebtoken');

const generateToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: '14d',
  });
}

export { generateToken }