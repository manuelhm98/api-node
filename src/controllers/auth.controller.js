const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { encrypt } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/hanfleJwt')

const login = async (req, res) => {
  req = matchedData(req)
  const password = await encrypt(req.password)
  const body = { ...req, password }
  const data = await usersModel.create(body)
  data.set('password', undefined, { strict: false })

  const dataUser = {
    token: await tokenSign(data),
    user: data,
  }
  res.send({
    dataUser,
  })
}

module.exports = { login }
