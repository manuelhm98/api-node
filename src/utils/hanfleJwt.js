const jwt = require('jsonwebtoken')

const JWT_KEY = process.env.JWT_SECREY_KEY

const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_KEY,
    {
      expiresIn: '2h',
    }
  )
  return sign
}

const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokeJwt, JWT_KEY)
  } catch (e) {
    return null
  }
}

module.exports = { tokenSign, verifyToken }
