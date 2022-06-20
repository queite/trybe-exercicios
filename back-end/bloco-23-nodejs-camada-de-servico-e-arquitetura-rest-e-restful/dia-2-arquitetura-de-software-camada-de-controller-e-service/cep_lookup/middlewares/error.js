module.exports = (err, _req, res, _next) => {
  console.log(err);
  res.status(400).json(err);
}