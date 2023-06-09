const { findAll, modifyOneUser } = require('../model/userModel.js')


const getAll = (req, res) => {
    findAll()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: "Server error"}))
}

const putOneUser = (req, res)=> {
    modifyOneUser()
    .then((data) => res.json(data))
    .catch((err)=> res.status(500).json({ message: "Server error"}))
}

module.exports = {getAll, putOneUser}