// const connection = require("../db-config");

const router = require("express").Router();

const { getAll, getOneUser, putOneUser, createUser } = require("../controller/userController.js")

router.get('/', getAll)
router.get('/:id', getOneUser )
router.post('/', createUser)
router.put('/:id', putOneUser)

module.exports = router;