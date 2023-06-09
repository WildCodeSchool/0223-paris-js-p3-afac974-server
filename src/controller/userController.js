const { findAll } = require('../model/userModel.js')
const {modifydAll} = require('../model/userModel.js')

const getAll = (req, res) => {
    findAll()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: "Server error"}))
}

const putAll = (req, res)=> {
    modifyAll()
    .then((data) => res.json(data))
    .catch((err)=> res.status(500).json({ message: "Server error"}))
}

module.exports = {getAll, putAll}