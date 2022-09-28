const mongoose = require('mongoose')

const dbConect = () => {
  const DB_URI = process.env.DB_URI
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, resp) => {
      !err
        ? console.log('** Correct connections ** ')
        : console.log('** Error connections **')
    }
  )
}

module.exports = dbConect
