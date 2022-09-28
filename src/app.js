const express = require('express')
const cors = require('cors')
const dbConect = require('./config/mongo')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/index.routes'))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/uploads'))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`The server is running in localhost:${port}`)
})

dbConect()
