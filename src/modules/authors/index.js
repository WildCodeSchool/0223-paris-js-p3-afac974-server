const router = require('express').Router()

const {getAllAuthor, getOneAuthor, createAuthor, editOneAuthor, deleteOneAuthor} = require('./controller')

router.get('/', getAllAuthor)
router.get('/:id', getOneAuthor)
router.post('/', createAuthor)
router.put('/:id', editOneAuthor)
router.delete('/:id', deleteOneAuthor)

module.exports = router