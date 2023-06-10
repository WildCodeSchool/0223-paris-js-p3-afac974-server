const router = require('express').Router()

const {getAll, getOneAuthor, createAuthor, editOneAuthor} = require('./controller')

router.get('/', getAll)
router.get('/:id', getOneAuthor)
router.post('/', createAuthor)
router.put('/:id', editOneAuthor)

module.exports = router