const { matchedData } = require('express-validator')
const { storagesModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const fs = require('fs')

const URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../uploads`

const getItems = async (req, res) => {
  try {
    const data = await storagesModel.find()
    res.send({
      data,
    })
  } catch (e) {
    handleHttpError(res, `Error => ${e}`)
  }
}

const getIdItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storagesModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, `Error => ${e}`)
  }
}

const createItem = async (req, res) => {
  try {
    const { file } = req
    const fileData = {
      filename: file.filename,
      url: `${URL}/${file.filename}`,
    }
    const data = await storagesModel.create(fileData)
    return res.send({ data })
  } catch (e) {
    handleHttpError(res, `Error => ${e}`)
  }
}

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storagesModel.findById(id)
    await storagesModel.deleteOne({ _id: id })
    const { filename } = data
    const filePath = `${MEDIA_PATH}/${filename}`
    fs.unlinkSync(filePath)
    res.send({
      data: {
        filePath,
        delete: true,
      },
    })
  } catch (e) {
    handleHttpError(res, `Error => ${e}`)
  }
}

module.exports = { getItems, getIdItem, createItem, deleteItem }
