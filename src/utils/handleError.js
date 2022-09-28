const handleHttpError = (res, msg, code = 403) => {
  res.status(code)
  res.send({ error: msg })
}

module.exports = { handleHttpError }
