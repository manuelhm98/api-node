const express = require('express')
const {
  createItem,
  getIdItem,
  getItems,
  deleteItem,
} = require('../controllers/storages.controller')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const { validatorGetStorageItem } = require('../validators/storages.validator')

router.get('/', getItems)
router.post('/', uploadMiddleware.single('myfile'), createItem)
router.delete('/:id', validatorGetStorageItem, deleteItem)
router.get('/:id', getIdItem)

module.exports = router
