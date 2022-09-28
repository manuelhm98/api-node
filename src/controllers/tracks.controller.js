const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find()
    res.send({
      data,
    })
  } catch (e) {
    handleHttpError(res, 'Error_Get_Items')
  }
}

const getIdItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await tracksModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, `Error => ${e}`)
  }
}

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    const data = await tracksModel.findOneAndUpdate(id, body)
    return res.send({ data })
  } catch (e) {
    handleHttpError(res, `${e}`)
  }
}

const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body)
    return res.send({ data })
  } catch (e) {
    handleHttpError(res, `${e}`)
  }
}

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.delete({ _id: id })
    res.send({ data })
  } catch (e) {
    handleHttpError(res, `${e}`)
  }
}

module.exports = { getItems, getIdItem, createItem, updateItem, deleteItem }
