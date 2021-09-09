const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  fs.readdir(path.join(__dirname, '..', 'public', 'houses'), (err, houses) => {
    if (err) {
      res.status(500).send('oh no! ' + err.message)
    } else {
      fs.readdir(path.join(__dirname, '..', 'public', 'random'), (err, other) => {
        if (err) {
          res.status(500).send('oh no! ' + err.message)
        } else {
          res.json({
            houses,
            other
          })
        }
      })
    }
  })
})

module.exports = router
