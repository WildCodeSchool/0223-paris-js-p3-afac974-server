const router = require('express').Router()
const { getAllArt, getOneArt, createArt, putOneArt, deleteArt} = require('./controller')

router.get('/', getAllArt)
router.get('/:id', getOneArt)
router.post('/', createArt)
router.put('/:id', putOneArt)
router.delete('/:id', deleteArt)

module.exports = router