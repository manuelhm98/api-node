const { validationResult } = require('express-validator')

/**
 * If the validation result is valid, then call the next function. If the validation result is invalid,
 * then send a 403 status code and the errors.
 * @param req - The request object
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The validationResult function returns an object with a throw method.
 */
const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (e) {
    res.status(403)
    res.send({ errors: e.array() })
  }
}

module.exports = validateResults
