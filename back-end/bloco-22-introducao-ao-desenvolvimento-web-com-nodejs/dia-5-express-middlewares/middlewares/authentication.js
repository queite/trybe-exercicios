module.exports = (req, res, next) => {
  const {authorization} = req.headers;
  console.log('aqui', req.headers);
  if (!authorization || authorization.length < 16) return res.status(401).json({ message: 'Token inválido!' });
  next();
}