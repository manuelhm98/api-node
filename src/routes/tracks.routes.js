const express = require('express')
const {
  getItems,
  getIdItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks.controller')
const {
  validateCreateTracks,
  validateGetTrackById,
} = require('../validators/tracks.validator')

const router = express.Router()
router.get('/', getItems)
router.post('/', validateCreateTracks, createItem)
router.get('/:id', validateGetTrackById, getIdItem)
router.put('/:id', validateCreateTracks, validateGetTrackById, updateItem)
router.delete('/:id', validateGetTrackById, deleteItem)

module.exports = router
