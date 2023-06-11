const router = require('express').Router();

const { getAll, getOneUser, putOneUser, createUser,deleteUser } = require("./controller")
const { validateAddUser } = require("./validator")

router.get('/', getAll)
router.get('/:id', getOneUser )
router.post('/', validateAddUser, createUser)
router.put('/:id', putOneUser)
router.delete('/:id', deleteUser)



module.exports = router;