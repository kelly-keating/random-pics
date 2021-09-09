const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  const pics = {}
  const housesPath = path.join(__dirname, '..', 'public', 'houses')
  const randomPath = path.join(__dirname, '..', 'public', 'random')

  fs.promises.readdir(housesPath)
    .then(houses => pics.houses = houses)
    .then(() => fs.promises.readdir(randomPath))
    .then(other => pics.other = other)
    .then(() => res.json(pics))
    .catch(err => res.status(500).send('oh no! ' + err.message))
})

module.exports = router
