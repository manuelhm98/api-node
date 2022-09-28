const express = require('express')
const { login } = require('../controllers/auth.controller')

const {
  validatorRegister,
  validatorLogin,
} = require('../validators/auth.validator')
const router = express.Router()

router.post('/login', (req, res) => {})
router.post('/register', validatorRegister, login)

module.exports = router
