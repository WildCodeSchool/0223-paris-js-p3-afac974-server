const router = require('express').Router();

const { getAllCategory, getOneCategory, putOneCategory, createCategory } = require("./controller")

router.get('/', getAllCategory)
router.get('/:id', getOneCategory )
router.post('/', createCategory)
router.put('/:id', putOneCategory)


module.exports = router;