const router = require('express').Router();

const { getAll, getOneUser, putOneUser, createUser } = require("./controller")

router.get('/', getAll)
router.get('/:id', getOneUser )
router.post('/', createUser)
router.put('/:id', putOneUser)


module.exports = router;