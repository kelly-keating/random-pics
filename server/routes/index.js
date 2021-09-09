const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  const pics = {}

  const loc = (name) => path.join(__dirname, '..', 'public', name)
  const getFiles = dirName => fs.promises.readdir(loc(dirName))
    .then(files => pics[dirName] = files)

  const folders = ['houses', 'random']
    .map(name => getFiles(name))

  Promise.all(folders)
    .then(() => res.json(pics))
    .catch(err => res.status(500).send('oh no! ' + err.message))
})

module.exports = router
