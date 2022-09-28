const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorGetStorageItem = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  },
]

module.exports = { validatorGetStorageItem }
