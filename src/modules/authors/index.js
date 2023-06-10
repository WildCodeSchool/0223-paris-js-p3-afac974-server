const router = require('express').Router()

const {getAll, getOneAuthor, createAuthor} = require('./controller')

router.get('/', getAll)
router.get('/:id', getOneAuthor)
router.post('/', createAuthor)

module.exports = router