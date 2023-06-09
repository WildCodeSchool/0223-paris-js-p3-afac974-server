const router = require('express').Router()

const { getAllArt } = require('./controller')

router.get('/', getAllArt)

module.exports = router