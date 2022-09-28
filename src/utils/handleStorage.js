const multer = require('multer')

/* Creating a storage object that will be used by multer to store the file. */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathStorages = `${__dirname}/../uploads`
    cb(null, pathStorages)
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop()
    const filename = `file-${Date.now()}.${ext}`
    cb(null, filename)
  },
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware
