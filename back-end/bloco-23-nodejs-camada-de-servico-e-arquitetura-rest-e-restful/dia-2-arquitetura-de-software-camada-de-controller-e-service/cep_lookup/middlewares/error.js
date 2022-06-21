module.exports = (err, _req, res, _next) => {
  if(err.isJoi) return res.status(400)
    .json(`{ error:
      { code: invalidData, message: ${err.details[0].message} }
    }`);

  if(err.code) {
    const status = {
      notFound: 404,
      alreadyExists: 409,
      invalidData: 400
    }
    return res.status(status[err.code]).json(err);
  }

  return res.status(500).json(err);
}