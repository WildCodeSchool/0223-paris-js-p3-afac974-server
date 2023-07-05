const router = require('express').Router()
const { getAllArt, getOneArt, createArt, putOneArt, deleteArt} = require('./controller')
const upload = require('../../middleware/fileUpload')

router.get('/', getAllArt)
router.get('/:id', getOneArt)
router.post('/', upload.single("arts"), createArt)
router.put('/:id', putOneArt)
router.delete('/:id', deleteArt)

module.exports = router