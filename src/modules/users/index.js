const router = require('express').Router();

const { getAllUser, getOneUser, putOneUser, createUser } = require("./controller")

router.get('/', getAllUser)
router.get('/:id', getOneUser )
router.post('/', createUser)
router.put('/:id', putOneUser)


module.exports = router;