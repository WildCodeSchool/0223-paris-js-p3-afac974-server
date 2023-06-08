const { findAll } = require('../model/userModel.js')

const getAll = (req, res) => {
    findAll()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: "Server error"}))
}

module.exports = {getAll}