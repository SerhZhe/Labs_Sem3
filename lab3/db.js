'use strict'

const mongoose = require('mongoose')

let _db = null

module.exports = function (config) {
  const dbUrl = 'mongodb://0.0.0.0/lab'
  mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
    .catch(error => {
      console.error(error.message)
    })

  if (_db === null) {
    _db = mongoose.connection
  }

  return _db
}

