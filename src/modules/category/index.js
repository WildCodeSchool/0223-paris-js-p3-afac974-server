const router = require('express').Router();

const { getAllCategory, getOneCategory, putOneCategory, createCategory, deleteCategory } = require("./controller")

router.get('/', getAllCategory)
router.get('/:id', getOneCategory )
router.post('/', createCategory)
router.put('/:id', putOneCategory)
router.delete('/:id', deleteCategory)


module.exports = router;