const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    next(err);
  }

  try {
    const decode = jwt.verify(token, secret);
    req.user = decode;
    next();
  } catch (e) {
    e.statusCode = 401;
    next(e);
  }
};