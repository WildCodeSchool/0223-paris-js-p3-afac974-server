const router = require('express').Router();

const { getAll, getOneUser, putOneUser, register,deleteUser, login, logout } = require("./controller")

const { validateAddUser } = require("./validator")
const  { hashPassword, isAdmin, authorization } = require('../../middleware/auth')

router.get('/', authorization, isAdmin, getAll)
router.get("/logout", authorization, logout)
router.get('/:id', getOneUser )
router.post('/register', validateAddUser, hashPassword, register)
router.post("/login", login)
router.put('/:id', validateAddUser, hashPassword, putOneUser)
router.delete('/:id', deleteUser)

module.exports = router;