const router = require('express').Router();

const { getAll, getOneUser, putOneUser, register,deleteUser, login, logout, addUserFavorite, getAllFavoriteById } = require("./controller")

const { validateAddUser } = require("./validator")
const  { hashPassword, isAdmin, authorization } = require('../../middleware/auth')

router.get('/', authorization, isAdmin, getAll)
router.get("/logout", authorization, logout)
router.get("/favorite/:id", getAllFavoriteById )
router.get('/:id', authorization, isAdmin, getOneUser )
router.post('/register', validateAddUser, hashPassword, register)
router.post("/login", login)
router.post("/favorite/:user_id/:art_id", addUserFavorite)
router.put('/:id', authorization, validateAddUser, hashPassword, putOneUser)
router.delete('/:id', authorization, isAdmin, deleteUser)

module.exports = router;