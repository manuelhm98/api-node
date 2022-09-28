const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const TrackScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true
        },
        message: 'ERROR_URL',
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nacionality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

TrackScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('tracks', TrackScheme)
