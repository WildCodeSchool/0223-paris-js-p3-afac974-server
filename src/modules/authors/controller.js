const {findAll, findOneAuthor, addAuthor} = require('./model')

const getAll = (req, res) => {
    findAll()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => res.status(500).json({ message : "Server error"}))
}

const getOneAuthor = (req, res) => {
    const id = parseInt(req.params.id)

    if(isNaN(id)) {
        res.status.json({ message: "wrong id type" })
    }

    findOneAuthor(id)
        .then(([data]) => {
            if (data) {
                res.json(data)
            } else {
                res.status(404).json({ message: "No author found with this id!"})
            }
        })
        .catch((err) => res.status(500).json({ message : "Server error"}))
}

const createAuthor = (req, res) => {
    const author = req.body

    addAuthor(author)
        .then((result) => res.status(201).json(result))
        .catch((err) => res.status(500).json({ message: "Server error" }));
}

module.exports = { getAll, getOneAuthor, createAuthor }