const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

/* A middleware that validates the request body. */
const validateCreateTracks = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nacionality').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.start').exists().notEmpty(),
  check('duration.end').exists().notEmpty(),
  check('mediaId').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
]

const validateGetTrackById = [
  check('id').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
]

module.exports = { validateCreateTracks, validateGetTrackById }
