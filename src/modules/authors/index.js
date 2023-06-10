const router = require('express').Router()

const {getAll, getOneAuthor, createAuthor, editOneAuthor, deleteOneAuthor} = require('./controller')

router.get('/', getAll)
router.get('/:id', getOneAuthor)
router.post('/', createAuthor)
router.put('/:id', editOneAuthor)
router.delete('/:id', deleteOneAuthor)

module.exports = router