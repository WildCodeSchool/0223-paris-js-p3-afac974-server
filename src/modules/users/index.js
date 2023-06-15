const router = require('express').Router();

const { getAll, getOneUser, putOneUser, createUser,deleteUser } = require("./controller")
const { validateAddUser } = require("./validator")
const  { hashPassword } = require('../../middleware/auth')

router.get('/', getAll)
router.get('/:id', getOneUser )
router.post('/', validateAddUser, hashPassword, createUser)
router.put('/:id', validateAddUser, hashPassword, putOneUser)
router.delete('/:id', deleteUser)



module.exports = router;