const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname
console.log(PATH_ROUTES)

/**
 * It takes a string, splits it into an array, and returns the first element of that array.
 * @param fileName - the name of the file you want to remove the extension from
 * @returns The file name without the extension.
 */
const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

/* Reading the directory and filtering out the files that are not index.js. */
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file)
  if (name !== 'index') {
    router.use(`/${name}`, require(`./${file}`))
  }
})

module.exports = router
