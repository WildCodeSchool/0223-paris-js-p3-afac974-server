const router = require('express').Router();

const { getAll, getOneUser, putOneUser, createUser,deleteUser } = require("./controller")

router.get('/', getAll)
router.get('/:id', getOneUser )
router.post('/', createUser)
router.put('/:id', putOneUser)
router.delete('/:id', deleteUser)



module.exports = router;